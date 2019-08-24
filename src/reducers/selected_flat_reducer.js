const selectedFlatReducer = (state, action) => {
  // Reducer initialisation
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SELECT_FLAT':
      return action.payload;
    default:
      return state;
  }
};

export default selectedFlatReducer;
