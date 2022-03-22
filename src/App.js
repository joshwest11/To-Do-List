import Display from "./Components/Display";
import Input from "./Components/Input";
import { useState } from "react";
import "./index.css"
// import Animation from "./Components/Animation";
// import Background from '.Components/Image/BG.png';


const App = () => {
  // DISPLAY
  // INPUT
  const [input, setInput] = useState("");
  // DISPLAY LIST
  const [toDo, setToDo] = useState([]);

  // input 
  const addHandler = (event) => {
    setInput(event.target.value);
  };

// SUBMIT BUTTON
  const handleClick = () => {
    let storedList = [...toDo];
    storedList.push(input);
    setToDo(storedList);

    // setToDo([...toDo, { input }]);
  };


  // DELETE
  const removeHandler = (index) => {
    let storedArr = [...toDo];
    storedArr.splice(index, 1);
    setToDo(storedArr);
  };

  return (
  <div>
    <h1 className="todo">To Do List</h1>
    <div className="container">
      <h1><Input addHandler={addHandler} handleClick={handleClick}/></h1>
      </div>
     <div className="container1">
     <h1><Display toDo={toDo} removeHandler={removeHandler} /></h1>
     </div>
    </div>
  );
  
};



export default App;