import './App.css';
import Product from './components/Product.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Public Good</h1>
      </header>
      <main>
        <div>
          <Product />
        </div>
      </main>
    </div>
  );
}

export default App;
