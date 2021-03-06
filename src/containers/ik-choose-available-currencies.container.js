import { connect } from 'react-redux';
import { getCur } from '../actions';
import { changeCurForDynamic } from '../actions';
import { AvailableCurrencies } from '../components/available-currencies';

const mapStateToProps = (state) => {
  return {
    cur: state.getCurrencies.cur,
    filterText: state.availableCurrencies.filterText,
    choosenId: state.availableCurrencies.choosenId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurForDynamic: (id, abr) => {
      dispatch(changeCurForDynamic(id, abr));
    },
    getCur: () => {
      dispatch(getCur());
    }
  };
};

export const ChooseAvailableCurrencies = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableCurrencies);

