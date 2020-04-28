import { Map, List } from 'immutable';

const setMessages = function (app, action) {
  return app.set('messages', new List(action.messages));
};

const app = (state = Map({
  serverUrl: 'https://sandbox.2600hz.com:8443/v2',
  accountId: '4642e64040cdb8b89c310a21a07c7f62',
  headers: {
    'Content-Type': 'application/json',
    // Replace with a valid token
    'X-Auth-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImI5ZTkyZDI4OTViZTAyZjliZWExZDkwNGU0MjY2YTE0In0.eyJpc3MiOiJrYXpvbyIsImlkZW50aXR5X3NpZyI6IkE4cVFiZWJRc3dsbngzQmU2Z3RickZ6NURTR19fMS1HeXhoYzdPc0xrc2ciLCJhY2NvdW50X2lkIjoiNDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjIiLCJtZXRob2QiOiJjYl9hcGlfYXV0aCIsImV4cCI6MTU4ODEwNDg5NH0.J98oH6i49zBo4eMT0ahYqr-noMnMi5OfQmwkG7U5KOsi5f3eWy-45dPBhoNPtrqLcy5-7oI_4i5JqTpNN0rizSPsQc3gido3h6Fl0vGHBSb-jfyFXPjuAfF_WhXKqiMtqBGx_TIrsyU4W2hf-9rkzqEAacqeJoGsmsm966C76myOVVZEAU-UC-dfrFbqnwdG8T3kXG3bkgF0N7VXq5PIXTebcWYLVOYV-P94RQfPrPuQ1rb0mfsHzo-XroPwF0mF4SonqUQYdBMAv7tOGn4i-3sXkMDLgBn0cztBOlJcD35_6AZmMJALwh5rXxzN99tv6wBK1YGm6HG8YcmZdp9Kwg'
  },
  vmBoxId: 'b37675a2d7b90d60f0ee5d4175502394',
  messages: new List()
}), action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return setMessages(state, action);
    default:
      return state;
  }
};

export default app;
