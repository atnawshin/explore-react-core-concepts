import './App.css'
import Team from './Team';
import Users from './Users';
import Counter from './counter';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core COncepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>Third</button>
      {/* wrap in arrow function to use a parameter */}
      <button onClick={() => addToFive(3)}>Button 4</button>
    </>
  )
}

export default App
