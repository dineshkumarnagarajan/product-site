const getAllProdsReducer = (
  state = {
    fetched: false,
    data: [],
    fetching: false
  },
  action
) => {
  let new_state;
  switch (action.type) {
    case "ALL_PRODUCTS_GET_INIT":
      new_state = {
        ...state,
        fetching: true
      };
      break;
    case "ALL_PRODUCTS_GET_SUCCESS":
      new_state = {
        ...state,
        fetched: true,
        fetching: false,

        data: action.payload
      };
      break;
    case "ALL_PRODUCTS_GET_FAILED":
      new_state = {
        fetching: false,
        fetched: false,
        data: []
      };
      break;
    default:
      new_state = state;
      break;
  }
  return new_state;
};

export default getAllProdsReducer;
