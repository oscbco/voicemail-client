import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessages } from '../../redux/actions/app';

import MessagesTable from './MessagesTable';

function MessagesTableContainer (props) {
  return <MessagesTable vmBoxId={props.vmBoxId} serverUrl={props.serverUrl} accountId={props.accountId} headers={props.headers} messages={props.messages} setMessages={props.setMessages} />;
}

MessagesTableContainer.propTypes = {
  vmBoxId: PropTypes.string,
  messages: PropTypes.object,
  setMessages: PropTypes.func,
  serverUrl: PropTypes.string,
  accountId: PropTypes.string,
  headers: PropTypes.object
};

const mapStateToProps = (state) => ({
  vmBoxId: state.getIn(['app', 'vmBoxId']),
  serverUrl: state.getIn(['app', 'serverUrl']),
  accountId: state.getIn(['app', 'accountId']),
  headers: state.getIn(['app', 'headers']),
  messages: state.getIn(['app', 'messages'])
});

const mapDispatchToProps = (dispatch) => ({
  setMessages: (messages) => dispatch(setMessages(messages))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesTableContainer);
