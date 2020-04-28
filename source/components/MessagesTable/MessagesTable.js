import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DenseTable from '../DenseTable/DenseTable';
// import fetch from 'node-fetch';

export default function MessagesTable (props) {
  useEffect(() => {
    const requestUrl = `${props.serverUrl}/accounts/${props.accountId}/vmboxes/${props.vmBoxId}/messages?paginate=true`;
    fetch(requestUrl, { headers: props.headers })
      .then(response => response.json())
      .then(({ data }) => props.setMessages(data))
      .catch(console.log)
  }, [props.vmBoxId]);

  if (!props.messages) {
    return null;
  }
  return (
    <div>
      <h1>Voicemail Messages</h1>
      <DenseTable rows={props.messages} />
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
