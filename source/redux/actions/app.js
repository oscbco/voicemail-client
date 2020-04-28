export const setMessages = (messages) => (dispatch) => {
  dispatch({
    type: 'SET_MESSAGES',
    messages
  });
};
