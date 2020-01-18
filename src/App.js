import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() 
{
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"

          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      https://i.vimeocdn.com/video/646683867.webp?mw=1000&mh=563&q=70


      */}
          <div class = "Background-image">
            <div class ="textinfo">
                <h1 class2>My Ip Address:</h1>
                <h2 class2>18.207.211.37</h2>
                <p>
                  More details just for fun
                  </p>
                  <ul>
                    <li>Remote Port: 3000</li>
                    <li>Request Metod:</li>
                    <li>Server protocol:</li>
                    <li>Server Host:</li>
                    <li>user agent: </li>
                  </ul>
                  <p>footer</p>
              </div>
          </div>



    </div>
  
  );
}

export default App;
