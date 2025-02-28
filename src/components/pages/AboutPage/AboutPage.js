import { NavLink } from "react-router";

export default function AboutPage() {
  return (
    <>
      <h1>This is about page!!!</h1>
      <NavLink className="App-link" to="/">
        Go back to home
      </NavLink>
    </>
  );
}
