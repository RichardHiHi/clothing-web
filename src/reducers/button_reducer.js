import { MINI_ACTION } from '../actions';

const button_reducer = (state, action) => {
  if (action.type === MINI_ACTION) {
    let openClose;
    // minichange is initial variable
    const miniChange = `is${action.payload.name}Open`;
    if (action.payload.action === 'open') {
      openClose = true;
    }
    if (action.payload.action === 'close') {
      openClose = false;
    }
    return { ...state, [miniChange]: openClose };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default button_reducer;
