import logo from './logo.svg';
import './App.css';
import Die from './Die';
import RollDice from './RollDice';

// function App() {
//   return (
//     <div className="App">
//       <Die/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Die face="five"/>
//       <Die face="three"/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <RollDice/>
    </div>
  );
}


export default App;
