import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './Containers/App/App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  fancyLog();
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

render();
store.subscribe(render);

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #fff");
  console.log(store.getState());
}
