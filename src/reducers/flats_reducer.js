const flatsReducer = (state, action) => {
  // Reducer initialisation
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
