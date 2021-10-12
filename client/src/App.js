import './App.css';
import Container from './components/Container';
import { PollProvider } from './context/PollContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Question">What is your favourite MMORPG?</div>
      </header>
      <PollProvider>
        <Container />
      </PollProvider>
    </div>
  );
}

export default App;
