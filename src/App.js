import { NavLink, Outlet } from "react-router";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header className="App-header"></Header>
      <div className="App-content-wrap">
        <Outlet />
      </div>
      <footer className="App-footer">
        <span>This is footer</span>
        <NavLink to="/about">Go to about page</NavLink>
      </footer>
    </>
  );
}

export default App;
