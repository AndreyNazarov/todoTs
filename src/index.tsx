import ReactDom from 'react-dom';
import '@csstools/normalize.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './base.css';
import App from './app';

function AppRender() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

ReactDom.render(<AppRender />, document.querySelector('#root'));
