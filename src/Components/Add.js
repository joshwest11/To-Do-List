// import React, { useState } from 'react';

// const Add = () => {
//     const [numbers, setNumbers] = useState([''])

//     const addHandler = (Todos) => {
//         let storedTodos = [...Todos]
//         storedTodos.push(storedTodos[storedTodos.length - 1] +1)
//         setNumbers(storedTodos)
//     }
//     return (
//         <div>
//             {numbers.map((number, index) =>{
//             return <h1 key={index}>{numbers}</h1>
//             })}
//             <button onClick={addHandler}>add one</button>
//         </div>
//     )
// }
// export default Add;