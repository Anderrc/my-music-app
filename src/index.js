import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv'
import Header from './components/organisms/header/header';
import Aside from './components/molecules/aside/aside';
dotenv.config({path: ".env.local"})

ReactDOM.render(
  <React.StrictMode>
    <div className="globalContent">
      <Header />
      <div className="globalContent__body">
        <div className="contenedor">
          <App/>
        </div>
      </div> 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
