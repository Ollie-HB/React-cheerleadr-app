import './App.css';
import { ShoutButton } from "./components/ShoutButton";

const App = () => {
  const word = 'LIVERPOOL';

  const handleClick = (letter) => {
    console.log("Clicked the", letter)
  };

  return (
    <div className="App">
      <h1>LIVERPOOL</h1>
    <div>
      {word.split("").map((char) => {
        return <ShoutButton char={char} handleClick={handleClick} />
      })}
    </div>
    </div>
  );
}

export default App;
