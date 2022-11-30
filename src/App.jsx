import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div className='App container'>
      <h1>React</h1>

      <Card />

      <div className='card'>
        <h2 className='title'>Hello</h2>
      </div>
    </div>
  );
}

export default App;
