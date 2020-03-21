import 'proxy-polyfill';
import './index.css';
import * as serviceWorker from './serviceWorker';

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
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
