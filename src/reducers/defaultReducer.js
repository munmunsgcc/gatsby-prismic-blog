const initialState = {};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case 'DEFAULT':
      return { ...state, ...payload };
    default:
      return state;
  }
};
