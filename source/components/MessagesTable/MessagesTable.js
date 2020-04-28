import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DenseTable from '../DenseTable/DenseTable';
import MessageActions from '../MesssageActions/MessageActions';
// import fetch from 'node-fetch';

export default function MessagesTable (props) {
  const [selected, setSelected] = useState(new Set([]));
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    fetchMessages();
  }, [props.vmBoxId]);

  const fetchMessages = () => {
    const requestUrl = `${props.serverUrl}/accounts/${props.accountId}/vmboxes/${props.vmBoxId}/messages?paginate=true`;
    setFetching(true);
    fetch(requestUrl, { headers: props.headers })
      .then(response => response.json())
      .then(({ data }) => {
        if (Array.isArray(data)) {
          props.setMessages(data);
          setFetching(false)
        }
        return null;
      })
      .catch((error) => {
        console.log(error)
        setFetching(false);
      });
  }

  const changeMessageStatus = (status) => {
    const requestUrl = `${props.serverUrl}/accounts/${props.accountId}/vmboxes/${props.vmBoxId}/messages`;
    setFetching(true);
    fetch(requestUrl, {
      method: 'POST',
      headers: props.headers,
      body: JSON.stringify({
        data: {
          folder: status,
          messages: [...selected]
        }
      })
    }).then(response => response.json())
      .then(() => fetchMessages())
      .catch((error) => {
        console.log(error)
        setFetching(false);
      });
  }

  const selectMessage = (event) => {
    if (event.target.checked) {
      setSelected(new Set(selected.add(event.target.name)));
    } else {
      selected.delete(event.target.name);
      setSelected(new Set(selected));
    }
  }

  console.log(selected);

  if (!props.messages) {
    return null;
  }

  return (
    <div>
      <h1>Voicemail Messages</h1>
      <MessageActions changeMessageStatus={changeMessageStatus} fetching={fetching} selected={selected} />
      <DenseTable rows={props.messages} selectMessage={selectMessage} fetching={fetching} selected={selected} />
    </div>
  );
}

MessagesTable.propTypes = {
  vmBoxId: PropTypes.string,
  serverUrl: PropTypes.string.isRequired,
  accountId: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  headers: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired
};
