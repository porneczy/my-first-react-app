import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
const text = "asdasdasd"

function App() {
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <p>
          kdsjfkléjlskadé
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
  );
}

export default App;
