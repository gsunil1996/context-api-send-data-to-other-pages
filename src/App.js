import './App.css';
import Counter from './components/Counter';
import CounterResult from './components/CounterResult';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterResult />
    </div>
  );
}

export default App;
