import './App.css';

const App = () => {
  const word = 'LIVERPOOL';

  const handleClick = () => {
    console.log("Clicked!")
  }

  return (
    <div className="App">
      <h1>LIVERPOOL</h1>
    <div>
      {word.split("").map((char) => {
        return <button onClick={handleClick}>{char}</button>
      })}
    </div>
     {word}
    </div>
  );
}

export default App;
