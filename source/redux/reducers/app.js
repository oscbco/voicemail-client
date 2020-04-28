import { Map, List } from 'immutable';

const setMessages = function (app, action) {
  return app.set('messages', new List(action.messages));
};

const app = (state = Map({
  serverUrl: 'https://sandbox.2600hz.com:8443/v2',
  accountId: '4642e64040cdb8b89c310a21a07c7f62',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImI5ZTkyZDI4OTViZTAyZjliZWExZDkwNGU0MjY2YTE0In0.eyJpc3MiOiJrYXpvbyIsImlkZW50aXR5X3NpZyI6IkE4cVFiZWJRc3dsbngzQmU2Z3RickZ6NURTR19fMS1HeXhoYzdPc0xrc2ciLCJhY2NvdW50X2lkIjoiNDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjIiLCJtZXRob2QiOiJjYl9hcGlfYXV0aCIsImV4cCI6MTU4ODA5NzIzMX0.UaS5VDy84VGNR4gLVLjfgMuM-cRyakXuVzIIBNs3_nhlVYwex4UTowg_Vx20q_Gr_TF7dyRLHEuocd0d3Lna7-TpEovyFdKgjx9L854gaLHh2cv-Zpx1GLh32h84HBpaOxgBFSEKlEahWWAkdvp8gP-dy0In8bLNQRmgir50ZtxXmnvZSzs3-T9ND1KfcHZ59f_4GkU7cfL7IOSsmSf7rxQ8-hzyfLvc9t7nCmBgVwpQe2kRgujXStiEoW5oa-ociEjgcHp7EjfFphWL4AFBDHW08wbMKmZE7ooeGTOelB7iZ8ZJehMTPBBT8LC4j-DeB-5b5hghuaiEajCZPTDd3g'
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
