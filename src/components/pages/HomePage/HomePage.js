import { useEffect, useState } from "react";
import { Statistics } from "../../Statistics/Statistics";
import TicTacToe from "../../TicTacToe/TicTacToe";
import "./HomePage.css";

export default function HomePage() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [statisticsUpdate, setStatisticsUpdate] = useState(0);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [statisticsUpdate]);

  function updateStatistics() {
    setStatisticsUpdate(statisticsUpdate + 1);
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app-home-page">
        <Statistics data={items}></Statistics>
        <div className="app-home-page-tic-tac-toe">
          <TicTacToe addStatics={updateStatistics}></TicTacToe>
        </div>
      </div>
    );
  }
}
