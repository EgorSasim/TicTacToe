import { NavLink, Outlet } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import NamesModal from "./components/NamesModal/NamesModal";
import { useState } from "react";

function App() {
  const [names, setNames] = useState({
    firstPlayerName: "",
    secondPlayerName: "",
  });

  function handleNamesChange(firstPlayerName, secondPlayerName) {
    setNames({ firstPlayerName, secondPlayerName });
  }

  return (
    <>
      <Header className="App-header"></Header>
      <div className="App-content-wrap">
        <Outlet context={[names, setNames]} />
      </div>
      <footer className="App-footer">
        <span>This is footer</span>
        <NavLink className="App-link" to="/about">
          Go to about page
        </NavLink>
        <NamesModal setNames={handleNamesChange}></NamesModal>
      </footer>
    </>
  );
}

export default App;
