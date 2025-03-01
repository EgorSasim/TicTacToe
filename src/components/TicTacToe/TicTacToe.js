import { useState } from "react";
import Table from "../Table/Table";
import { CROSS_SIGN, ZERO_SIGN } from "../../constants/signs.constants";
import WinnerModal from "../WinnerModal/WinnerModal";
import NamesModal from "../NamesModal/NamesModal";

export default function TicTacToe({ addStatics }) {
  const tableSize = 3;
  const tableInitialValue = Array.from({ length: tableSize }, () =>
    new Array(tableSize).fill("")
  );
  const [currentSign, setCurrentSign] = useState(CROSS_SIGN);
  const [table, setTable] = useState(tableInitialValue);
  const [winnerModalOpen, setWinnerModalOpen] = useState(false);
  const [names, setNames] = useState({
    firstPlayerName: "",
    secondPlayerName: "",
  });
  const [winnerName, setWinnerName] = useState("");

  function handleNamesChange(firstPlayerName, secondPlayerName) {
    setNames({ firstPlayerName, secondPlayerName });
  }

  function handleTableClick(row, col) {
    if (table[row][col] !== "") {
      return;
    }
    table[row][col] = currentSign;
    if (checkWinState(table)) {
      onWinState();
    }
    changeSign();
    setTable([...table]);
  }

  function reset() {
    setTable(tableInitialValue);
    setCurrentSign(CROSS_SIGN);
  }

  function closeWinnerModal() {
    setWinnerModalOpen(false);
    reset();
  }

  const onWinState = () => {
    setWinnerName(
      currentSign === CROSS_SIGN
        ? Object.values(names)[0]
        : Object.values(names)[1]
    );

    if (Object.values(names).every((name) => name)) {
      const newRecord = {
        firstPlayer: {
          name: Object.values(names)[0],
          winner: currentSign === CROSS_SIGN,
        },
        secondPlayer: {
          name: Object.values(names)[1],
          winner: currentSign === ZERO_SIGN,
        },
      };

      fetch(process.env.REACT_APP_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecord),
      }).then(() => addStatics());
    }

    setWinnerModalOpen(true);
  };

  const changeSign = () => {
    setCurrentSign((prevSign) =>
      prevSign === CROSS_SIGN ? ZERO_SIGN : CROSS_SIGN
    );
  };

  const checkWinState = (table) => {
    return (
      checkRowsWinState(table) ||
      checkRowsWinState(transpose(table)) ||
      isSameItemsArr(getFirstDiagonal(table)) ||
      isSameItemsArr(getSecondDiagonal(table))
    );
  };

  const checkRowsWinState = (table) => {
    let winState = false;
    table.forEach((row) => {
      if (isSameItemsArr(row)) {
        winState = true;
        return;
      }
    });
    return winState;
  };

  const transpose = (table) =>
    table[0].map((_, i) => table.map((row) => row[i]));

  const getFirstDiagonal = (table) => {
    let res = [];
    table.forEach((_, rowIdx) => res.push(table[rowIdx][rowIdx]));
    return res;
  };

  const getSecondDiagonal = (table) => {
    let res = [];
    const tableSize = table.length;
    table.forEach((_, rowIdx) =>
      res.push(table[tableSize - rowIdx - 1][rowIdx])
    );
    return res;
  };

  const isSameItemsArr = (arr) => arr.every((el) => el && el === arr[0]);
  return (
    <>
      <Table tableClick={handleTableClick} table={table}></Table>
      <WinnerModal
        open={winnerModalOpen}
        onClose={closeWinnerModal}
        winner={winnerName}
      ></WinnerModal>
      <NamesModal setNames={handleNamesChange}></NamesModal>
    </>
  );
}
