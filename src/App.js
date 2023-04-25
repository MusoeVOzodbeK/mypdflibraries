import Pdf from './kaktuslar.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={Pdf}
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
