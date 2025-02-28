import Cell from "../cell/Cell"
import "./Table.css"

export default function Table({table, tableClick}) {
    function getTableCellStyles(row, col) {
        const border = '0.1rem solid black';
        return {
            border: border,
            borderLeft: col && border,
            borderTop: row && border,
            borderRight: col === (table?.length - 1) ? 0 : border,
            borderBottom: row === (table[0]?.length - 1) ? 0 : border
        }
    }

    return (
        <div className="app-table" style={{gridTemplateColumns: `repeat(${table.length}, 1fr)`, gridTemplateRows: `repeat(${table[0].length}, 4rem)`}}>
            {table.map((row, rowIdx) => row.map((_, cellIdx) => 
            (
                <Cell emitClick={() => tableClick(rowIdx, cellIdx)} key={`${rowIdx}-${cellIdx}`} value={table[rowIdx][cellIdx]} style={getTableCellStyles(rowIdx, cellIdx)}></Cell>
            )
            ))}
        </div>
    )
}

