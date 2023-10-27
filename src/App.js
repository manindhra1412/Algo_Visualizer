import './App.css';
import Header from './Header/Header';
import Loading from './LoadingComponent/Loading';
import PathfindingComponent from './PathfindingComponent/PathfindingComponent';
import { useState,useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading with a timeout (you can replace this with your actual data loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);
  
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <PathfindingComponent />
        </div>
      )}
    </div>
  );
}

export default App;