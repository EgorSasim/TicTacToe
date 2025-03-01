import "./Statistics.css";

export function Statistics({ data }) {
  return (
    <div className="app-statistics">
      <h2 className="app-statistics-header">Statistics:</h2>
      <div className="app-statistics-content">
        {data.map((item, idx) => (
          <div key={idx} className="app-statistics-item">
            <span>{idx + 1}</span>
            <span
              className="app-statistics-item__left-section"
              style={
                item.firstPlayer.winner ? { color: "green" } : { color: "red" }
              }
            >
              {item.firstPlayer.name}:
            </span>

            <span
              className="app-statistics-item__right-section"
              style={
                item.firstPlayer.winner ? { color: "red" } : { color: "green" }
              }
            >
              {item.secondPlayer.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
