import React from 'react'
import './Form.css'

const Form = ({startNodeRow,startNodeCol,finishNodeRow,finishNodeCol,
setStartNodeRow,setStartNodeCol,setFinishNodeRow,setFinishNodeCol}) => {
  return (
    <div className="input-fields">
        <label>Start Node Row:</label>
        <input
          type="number"
          min="0"
          max="19"
          value={startNodeRow}
          onChange={(e) => setStartNodeRow(parseInt(e.target.value))}
        />
        <label>Start Node Col:</label>
        <input
          type="number"
          min="0"
          max="49"
          value={startNodeCol}
          onChange={(e) => setStartNodeCol(parseInt(e.target.value))}
        />
        <label>Finish Node Row:</label>
        <input
          type="number"
          min="0"
          max="19"
          value={finishNodeRow}
          onChange={(e) => setFinishNodeRow(parseInt(e.target.value))}
        />
        <label>Finish Node Col:</label>
        <input
          type="number"
          min="0"
          max="49"
          value={finishNodeCol}
          onChange={(e) => setFinishNodeCol(parseInt(e.target.value))}
        />
      </div>
  )
}

export default Form
