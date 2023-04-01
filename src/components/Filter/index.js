import { connect } from "react-redux";
import setVisibilityFilter from "../../actions/filter";
import Filter from "./Filter";

const getFilterCountries = data => {
  let arrlang = ["All"];
  data.forEach(item => {
    if (arrlang.indexOf(item.lang) === -1) {
      arrlang.push(item.lang);
    }
  });
  return arrlang;
};

const mapStateToProps = state => ({
  langs: getFilterCountries(state.data),
  active: state.visibilityFilter.lang
});

const mapDispatchToProps = dispatch => ({
  onClickHandler: lang => dispatch(setVisibilityFilter(lang))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
