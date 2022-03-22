// import backgroundImage from './Components/Image/BG.jpg'

const Display = ( {toDo, removeHandler} ) => {
    return ( 
        <div>
             <ul>
        {toDo.map((x, i) => (
          <li key={i}> {x}
            <button onClick={() => removeHandler(i)}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
     );
    //  <div className="Background" style={{ backgroundImage: `url(require("./Image/BG.jpg"))` }}></div>
}
 
export default Display;