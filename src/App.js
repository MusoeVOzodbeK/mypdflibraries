import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="./pdf/S._Unsal_Kaktuslar_ham_gullaydi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download='Kakuslar ham gullaydi'
        >
          Kaktuslar ham gullaydi
        </a>
      </header>
    </div>
  );
}

export default App;
