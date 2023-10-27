import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

import dijkstraImage from './dijkstra.png';
import mergeSortImage from './mergeSort.png';

function Main() {
  const algorithms = [
    {
      name: "Dijkstra's Algorithm",
      link: "/dijkstra",
      image: dijkstraImage,
      description: "An algorithm that finds the shortest path in a Graph/Maze .",
    },
    {
      name: "Merge Sort",
      link: "/merge-sort",
      image: mergeSortImage,
      description: "A popular sorting algorithm which uses divide and conquer.",
    },
  ];

  return (
    <div className="algorithm-list">
      <h2>
        <FontAwesomeIcon icon={faLink} className="icon" />Let's Visualize the Algorithms
      </h2>
      <ul>
        {algorithms.map((algorithm, index) => (
          <li key={index} className="algorithm-item">
            <img src={algorithm.image} alt={algorithm.name} />
            <div className="algorithm-info">
              <a href={algorithm.link} className="algorithm-name">{algorithm.name}</a>
              <p className="algorithm-description">{algorithm.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <hr/>

      <h2> Contributing</h2>
      <p>
        We welcome contributions to our algorithms. If you have an algorithm you'd like to add or improve, please check out our
        <a href="https://github.com/manindhra1412/Algo_Visualizer" target="_blank" rel="noreferrer"> Contributing Guidelines</a>.
      </p>

      <h2>GitHub Repository</h2>
      <p>
        You can find our algorithms on GitHub. Visit our
        <a href="https://github.com/manindhra1412/Algo_Visualizer" target="_blank" rel="noopener noreferrer"> GitHub Repository</a> to learn more.
      </p>
    </div>
  );
}

export default Main;