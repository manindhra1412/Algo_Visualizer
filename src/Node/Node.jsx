import React from 'react'
import './Node.css'
const Node = (props) => {
  const {
    col,
    isEnd,
    isStart,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    row,
  } = props;
  let extraClass = isEnd
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : isWall
    ? 'node-wall'
    : '';
  return (
    <div id={`node-${row}-${col}`}
    className={`node ${extraClass}`}
    onMouseDown={() => onMouseDown(row, col)}
    onMouseEnter={() => onMouseEnter(row, col)}
    onMouseUp={() => onMouseUp()}>
    </div>
  )
}

export default Node
