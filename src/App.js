import kaktuslar from "./pdf/kaktuslar.pdf";
import qalbiffati1 from './pdf/qalbiffati.pdf'
import qalbIffati2 from './pdf/qalbIffati2.pdf'
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
          href={qalbiffati1}
          target="_blank"
          rel="noopener noreferrer"
          download="Qalb Iffati 1"
        >
          Qalb Iffati
        </a>
        <a
          className="App-link"
          href={qalbIffati2}
          target="_blank"
          rel="noopener noreferrer"
          download="Qalb Iffati davomi"
        >
          Qalb Iffati davomi
        </a>
      </header>
    </div>
  );
}

export default App;
