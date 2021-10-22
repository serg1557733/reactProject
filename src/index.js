import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//const elem = React.createElement('h2', {className: 'App-header'}, 'Hello world'); 

/* const text = 'Hello world';
const elem = (
  <div className="App">
    <h1 className={text}>This is the text:{text}</h1>
    <input type="text" />
    <button tabIndex='0' >push me</button>
  </div>
  
) */

ReactDOM.render(
  <StrictMode>
      <App/>
  </StrictMode>,
  document.getElementById('root')
);




