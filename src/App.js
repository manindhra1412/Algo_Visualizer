import './App.css';
import Header from './Header/Header';
import Loading from './LoadingComponent/Loading';
import PathfindingComponent from './PathfindingComponent/PathfindingComponent';
import { useState,useEffect } from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import NotFound from './Main/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds
  }, []);
  
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <div>
            <Header />
            <Routes>
            <Route path="/" element={<Main/>} />
              <Route path="/merge-sort" element={<SortingVisualizer/>} />
              <Route path="/dijkstra" element={<PathfindingComponent/>} />
              <Route element={<NotFound/>}/>
            </Routes>
            <Footer/>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;