export default function Cell({style, value, emitClick}) {
    return (
        <button onClick={emitClick} style={style}>{value}</button>
    )
}