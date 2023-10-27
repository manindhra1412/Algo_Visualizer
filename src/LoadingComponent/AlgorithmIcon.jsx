// <!-- AlgorithmIcon.js -->
import React from 'react';

function AlgorithmIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="none" stroke="#3498db" strokeWidth="5" strokeDasharray="200" strokeDashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="200" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle cx="50" cy="50" r="35" fill="none" stroke="#F2B272" strokeWidth="5" strokeDasharray="180" strokeDashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="-180" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle cx="50" cy="50" r="25" fill="none" stroke="#D32F2F" strokeWidth="5" strokeDasharray="160" strokeDashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="160" dur="2s" repeatCount="indefinite" />
  </circle>
</svg>

  );
}

export default AlgorithmIcon;
