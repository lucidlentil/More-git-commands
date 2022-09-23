import './App.css';
import {useState} from 'react'; 
import {useEffect} from 'react'; 

function App() {
  const [count, setCount] = useState(0); 
  function updateCount() {
    console.log('Clicked on add'); 
    setCount(count + 1); 
  };
  const [countDown, setCountDown] = useState(100); 
  function subtractCount() {
    console.log('Clicked on subtract');
    setCountDown(countDown -1);
  };

useEffect (function() { // triggered on every render of the component
  console.log('Component re-rendered')
}); 

 useEffect (function() { // first paramenter - call back function that will run when dependencies change
  console.log('Counter state variable was updated')
  }, 
  [count, countDown] // second parameter - dependencies which will trigger function when changed
 );

 useEffect (function() {
  console.log('Component rendered for the FIRST time ONLY')
 }, 
  [] // leaving the second parameter empty will only trigger the function when the component mounts
 );
   
  return (
    <div className="App">
      <div>
        Count: {count}
      </div>
      <button onClick = {updateCount}>Add to count</button>
      <div>
        Count: {countDown}
      </div>
      <button onClick = {subtractCount}>Subtract from count</button>
    </div>
  );
}

export default App;
