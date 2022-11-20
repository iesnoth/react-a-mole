import './App.css';
import React, { useState } from 'react';
//direct child: grandchildren are Mole and EmptySlot
import MoleContainer from './components/MoleContainer';

//A function to generate nine MoleContainers
function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    //creates 9 components within MoleContainer
    //gives MoleContainer the keys to give each child, 
    //as well as the state variable and function to change it (update)
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score} />
      )
    }
    return (
      <div>
        {/* How MoleContainer will be rendered in the app */}
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {/* score is determined by setScore in the children */}
      {score}
      {/* Where MoleContainer will be rendered in the app */}
      {createMoleHill()}
    </div>
  );
}

export default App;
