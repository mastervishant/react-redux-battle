const visibilityFilter = (state = {lang:"All",click:1}, action) => {
    switch (action.type) {
      case "SET_VISIBILITY_FILTER":
        return action.filter;
      default:
        return state;
    }
  };
  
  export default visibilityFilter;
  