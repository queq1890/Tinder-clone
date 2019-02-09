const reducers = (state = { user: '' }, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.payload };
    }
  }
  return state;
};

export default reducers;
