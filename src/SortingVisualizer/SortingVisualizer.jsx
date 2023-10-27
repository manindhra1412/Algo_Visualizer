import React,{useState,useEffect} from 'react'
import './SortingVisualizer.css'
import { getMergeSortAnimations } from '../algo/mergesort';

const ANIMATION_SPEED_MS = 3;

const NUMBER_OF_ARRAY_BARS = 155;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
    const [array,setArray]=useState([]);

    const randomIntFromInterval = (min,max) => {
        return Math.floor(Math.random() * (max - min+1) + min);
    }

    const resetArray=()=>{
        const arr=[];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
            arr.push(randomIntFromInterval(6,510));
        }
        setArray(arr);
    }
    const mergeSort=()=>{
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }
    useEffect(()=>{
        resetArray();
    },[])
    
  return (
    <div className='array-container'>
        <div className='buttons'>
            <button className="gen-button"
            onClick={()=>resetArray()}>
                Generate New Array
            </button>
            <button className="gen-button"
            onClick={()=>mergeSort()}>
                Start MergeSort
            </button>
        </div>

      {array.map((val,idx)=>(
        <div className='array-bar' 
        key={idx}
        style={{height:`${val}px`}}></div>
      ))}
    </div>
  )
}

export default SortingVisualizer
