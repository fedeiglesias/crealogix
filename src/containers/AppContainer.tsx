import { connect } from 'react-redux';
import App, {
  IAppStateProps,
  IAppDispatchProps,
} from '../components/App';
import { IState } from '../store/reducers';
import { loadBeers } from '../store/actions/beersActions';

function mapStateToDispatch(state: IState): IAppStateProps {
  return {
    beers: state.beers.data,
    loading: state.beers.loading,
  };
}

const mapDispatchToProps: IAppDispatchProps = {
  loadBeers,
};

export default connect(
  mapStateToDispatch,
  mapDispatchToProps
)(App);
