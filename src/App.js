import Display from "./Components/Display";
import Input from "./Components/Input";
import { useState } from "react";
import "./index.css"


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
    <div className="container">
      <Input addHandler={addHandler} handleClick={handleClick}/>
     <div>
     <Display toDo={toDo} removeHandler={removeHandler} />
     </div>
      
    </div>
  );
};

// import  { motion } from "framer-motion"
// const App = () => {
//   <div>
//     <button onClick={() => setShow(!show)}>show</button>
//     <motion.h1
//     transition={{
//       duration:1.5,
//       // ease: "easeout",
//       type: "spring",
//       stiffness: 100
//     }}
//     initial={
//       x -100
//     }
//     animate={{
//       fontSize: "100px",
//       colour: "blue",
//       backGround: "red",
//       boxShadow: "10px 10px 0 rgb(170, 178, 255)",
//       x: 100,
//       y: 100,
//     }}
//     >app</motion.h1>
//   </div>

// }

export default App;