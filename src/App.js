import './App.css';

const App = () => {
  const word = 'LIVERPOOL';

  return (
    <div className="App">
      <h1>LIVERPOOL</h1>
    <div>
      {word.split("").map((char) => {
        return <button>{char}</button>
      })}
    </div>
     {word}
    </div>
  );
}

export default App;
