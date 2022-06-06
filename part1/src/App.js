import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'; 

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are a/an {props.job} </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name ="Dogacan" job="Veteriner" />
      <Hello name ="Oguzhan" job="Mühendis"/>
    </div>
  )
}
/*function App() {
  return (
    <div className="App">
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
    </div>
    <div>
      Hello!
    </div>
  );
}*/

export default App;
