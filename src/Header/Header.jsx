import React from 'react';
import './Header.css';
import icon from './icon.svg';

function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <div className="icon">
          <img src={icon} alt="My Icon" />
        </div>
        <h1 className="header-title">Algo_visualizer</h1>
      </div>
      <div className="dropdown">
        <select>
          <option value="dijktras">Dijkstra's Algorithm</option>
        </select>
      </div>
    </div>
  );
}

export default Header;