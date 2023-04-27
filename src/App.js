import kaktuslar from "./pdf/kaktuslar.pdf";
import qalbiffati from './pdf/qalbiffati.pdf'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <a
          className="App-link"
          href={kaktuslar}
          target="_blank"
          rel="noopener noreferrer"
          download="Kakuslar ham gullaydi"
        >
          Kaktuslar ham gullaydi
        </a>
        <a
          className="App-link"
          href={qalbiffati}
          target="_blank"
          rel="noopener noreferrer"
          download="Qalb Iffati"
        >
          Qalb Iffati
        </a>
      </header>
    </div>
  );
}

export default App;
