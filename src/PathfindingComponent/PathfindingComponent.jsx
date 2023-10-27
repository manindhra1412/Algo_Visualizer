    import React,{useEffect, useState} from 'react'
    import Node from '../Node/Node';
    import './PathfindingComponent.css'
    import { getNodesInShortestPathOrder,dijkstra } from '../algo/dijktras';
    import Form from '../Form/Form';

    const PathfindingComponent = () => {
        const [startNodeRow, setStartNodeRow] = useState(6);
        const [startNodeCol, setStartNodeCol] = useState(15);
        const [finishNodeRow, setFinishNodeRow] = useState(6);
        const [finishNodeCol, setFinishNodeCol] = useState(28);
        
        const [nodes,setNodes]=useState([]);
        const [mouseIsPressed,setMouseIsPressed]=useState(false);
        
        const handleMouseDown = (row,col)=>{
            const newgrid=getNewGridWithWallToggled(nodes,row,col);
            setNodes(newgrid);
            setMouseIsPressed(true);
        }

        const handleMouseEnter=(row,col)=>{
            if(!mouseIsPressed) return;
            const newgrid=getNewGridWithWallToggled(nodes,row,col);
            setNodes(newgrid);
        }

        const handleMouseUp=()=>{
            setMouseIsPressed(false);
        }
        // Starting of Dijkstra
        const handleVisualizeClick = () => {
            const startNode = nodes[startNodeRow][startNodeCol];
            const finishNode = nodes[finishNodeRow][finishNodeCol];
            const visitedNodesInOrder = dijkstra(nodes, startNode, finishNode);
            const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
            animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
        }
        
        const animateDijkstra=(visitedNodesInOrder,nodesInShortestPathOrder)=>{
            for(let i=0; i<=visitedNodesInOrder.length; i++){
                if(i===visitedNodesInOrder.length){
                    setTimeout(()=>{
                        animateShortestPath(nodesInShortestPathOrder)
                    },5*i);
                    return;
                }
                setTimeout(()=>{
                    const node=visitedNodesInOrder[i];
                    const nodeElement =document.getElementById(`node-${node.row}-${node.col}`);
                    if (nodeElement) {
                        if(nodeElement.classList.contains('node-start')){
                            nodeElement.className = 'node node-start node-visited';
                        }else if(nodeElement.classList.contains('node-finish')){
                            nodeElement.className = 'node node-finish node-visited';
                        }else{
                            nodeElement.className = 'node node-visited';
                        }
                    }
                },5*i);
            }
        }
        
        const animateShortestPath=(nodesInShortestPathOrder)=>{
            for (let i = 0; i < nodesInShortestPathOrder.length; i++){
                setTimeout(()=>{
                    const node = nodesInShortestPathOrder[i];
                    const nodeElement =document.getElementById(`node-${node.row}-${node.col}`);
                    if (nodeElement) {
                        if(nodeElement.classList.contains('node-start')){
                            nodeElement.className = 'node node-start';
                        }else if(nodeElement.classList.contains('node-finish')){
                            nodeElement.className = 'node node-finish';
                        }else{
                            nodeElement.className = 'node node-shortest-path';
                        }
                    }
                },25*i);
            }
        }

        useEffect(()=>{
            const grid=getInitialGrid();
            setNodes(grid);
        },[startNodeRow,startNodeCol,finishNodeRow,finishNodeCol]);

        const handleResetClick = () => {
            const nodes = document.getElementsByClassName('node');
            for (let i = 0; i < nodes.length; i++) {
              const element = nodes[i];
              // Check if the element has both "node" and "node-start" classes
              if ((element.classList.contains('node'))) {
                if(element.classList.contains('node-start')|| element.classList.contains('node-finish')){
                    continue;
                }
                element.className = '';
                element.classList.add('node');
              }
            }
            const grid = getInitialGrid();
            setNodes(grid);
          }
          
        // ----------------------------------------------------------------

        const getInitialGrid = () => {
            const grid = [];
            for (let row = 0; row < 14; row++) {
                const currentRow = [];
                for (let col = 0; col < 45; col++) {
                currentRow.push(createNode(col, row));
                }
                grid.push(currentRow);
            }
            return grid;
            };
        
            const createNode = (col, row) => {
            return {
                col,
                row,
                isStart: row === startNodeRow && col === startNodeCol,
                isEnd: row === finishNodeRow && col === finishNodeCol,
                distance: Infinity,
                isVisited: false,
                isWall: false,
                previousNode: null,
            };
            };
        
            const getNewGridWithWallToggled = (grid, row, col) => {
                const newGrid = grid.slice();
                const node = newGrid[row][col];
                const newNode = {
                ...node,
                isWall: !node.isWall,
                };
                newGrid[row][col] = newNode;
                return newGrid;
            };

        // ----------------------------------------------------------------
    return (
        <>
        <button className="visualize-button" onClick={handleVisualizeClick}>
            Visualize Dijkstra's Algorithm
        </button>
        <button className="reset-button" onClick={handleResetClick}>
            Reset
        </button>
        <div className='grid'>
            {
                nodes.map((row,ridx)=>{
                    return <div key={ridx}>
                        {row.map((node,nodeidx)=>{
                            const {isStart,isEnd,row,col,isWall}=node;
                            return (<Node
                                key={nodeidx}
                                row={row}
                                col={col}
                                isEnd={isEnd}
                                isStart={isStart}
                                isWall={isWall}
                                mouseIsPressed={mouseIsPressed}
                                onMouseDown={(row, col) => handleMouseDown(row, col)}
                                onMouseEnter={(row, col) =>
                                handleMouseEnter(row, col)
                                }
                                onMouseUp={() => handleMouseUp()}
                            />)
                        })}
                    </div>
                })
            }
        </div>
        <Form
        startNodeRow={startNodeRow}
        startNodeCol={startNodeCol}
        finishNodeRow={finishNodeRow}
        finishNodeCol={finishNodeCol}
        setStartNodeRow={setStartNodeRow}
        setStartNodeCol={setStartNodeCol}
        setFinishNodeRow={setFinishNodeRow}
        setFinishNodeCol={setFinishNodeCol}
      />
        </>
    )
    }

    // ----------------------------------------------------------------


    export default PathfindingComponent