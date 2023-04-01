const setVisibilityFilter = lang => {
    return {
      type: "SET_VISIBILITY_FILTER",
      filter:{lang:lang,click:1}
    };
  };
  export default setVisibilityFilter;
  