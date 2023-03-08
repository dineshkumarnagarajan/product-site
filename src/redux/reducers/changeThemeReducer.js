const changeThemeReducer = (
    state = {
      themeType: "light"
    },
    action
  ) => {
    let new_state;
    switch (action.type) {
      case "CHANGE_THEME":
        new_state = {
            themeType: action.payload
        };
        break;
      default:
        new_state = state;
        break;
    }
    return new_state;
  };
  
  export default changeThemeReducer;
  