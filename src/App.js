import logo from './logo.svg';
import './App.css';
import Form from './template/Form'
import Card from './template/Card'

function App() {
  return (
    <div className="App flex justify-center">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
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
        </a>*/}
      </header>
        {/*<Card />*/}
        <Form />
    </div>
  );
}

export default App;
