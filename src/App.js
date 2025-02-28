import "./App.css";
import Header from "./components/header/Header";
import TicTacToeView from "./views/TicTacToeView";

function App() {
  return (
    <>
      <Header className="App-header"></Header>
      <div className="App-table-wrap">
        <TicTacToeView></TicTacToeView>
      </div>
    </>
  );
}

export default App;
