import React, { useState } from 'react';
import './Header.css';
import icon from './icon.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [algo,setAlgo]=useState('none');
  const navigate = useNavigate();

  const handleAlgorithmChange = (event) => {
    const selectedAlgorithm = event.target.value;
    setAlgo(selectedAlgorithm);
    if (selectedAlgorithm === 'dijkstra') {
      navigate('/dijkstra');
    } else if (selectedAlgorithm === 'merge-sort') {
      navigate('/merge-sort');
    }
  };

  return (
    <div className="header">
      <Link to={'/'}
        style={{textDecoration:'none',color: 'inherit',}}>
      <div className="left-section">
        <div className="icon">
          <img src={icon} alt="My Icon" />
        </div>
          <h1 className="header-title">Algo_visualizer</h1>
      </div>
      </Link>
      <div className="dropdown">
        <select defaultValue="none" onChange={handleAlgorithmChange}>
          <option value="none">Select Algo</option>
          <option value="dijkstra">Dijkstra's Algorithm</option>
          <option value="merge-sort">MergeSort</option>
        </select>
      </div>
    </div>
  );
}

export default Header;