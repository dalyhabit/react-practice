import initialState from '../store/initialState';

export default (state = initialState.query, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return action.data;

    default:
      return state;
  }
};
