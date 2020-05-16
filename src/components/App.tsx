import React from 'react';
import { IBeerItem, ApiStatus } from '../models';
import style from './styles.css';

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.loadBeers();
  }

  render() {
    return (
      <div className={style.prueba}>Beers Crafters</div>
    );
  }
}

export default App;

export interface IAppStateProps {
  loading: ApiStatus;
  beers: IBeerItem[];
}

export interface IAppDispatchProps {
  loadBeers: () => void;
}

type AppProps = IAppStateProps & IAppDispatchProps;
