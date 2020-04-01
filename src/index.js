import 'proxy-polyfill';
import * as serviceWorker from './serviceWorker';

import './index.css';

Promise.all([
  import('react'),
  import('react-dom'),
  import('./App'),
]).then(([
  { default: React },
  { default: ReactDOM },
  { default: App },
]) => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
