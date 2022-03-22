const Input = ( { addHandler, handleClick  } ) => {
 

    return ( 
        <div>
            <input 
            onChange={addHandler}
        placeholder="Enter To Do's Here!"
        name="input" 
        type="text" />
            <button onClick={handleClick}>Add</button>
            
    
        </div>
            
     );
}
 
export default Input;