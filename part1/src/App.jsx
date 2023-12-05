import { useState } from "react";

const History = (props) => {
  const {allClicks} = props;
  if(allClicks.length === 0){
    return (<div>
        the app is used by pressing the buttons
    </div>)
  }else{
    return (<div>
     button press history: {props.allClicks.join(' ')}
    </div>
    )
  }
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
   setAll(allClicks.concat("L"))
  const updatedLeft = left + 1;
  setLeft(updatedLeft)
  setTotal(updatedLeft+right)
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    const updatedRight = right + 1;
    setRight(updatedRight)
    setTotal(updatedRight+right)
  };

  return (
    <div>
    {left}
    <button onClick={handleLeftClick}>left</button>
    <button onClick={handleRightClick}>right</button>
    {right}
    {/* <p>{allClicks.join(' ')}</p> */}
    <div>{total}</div>
    <History allClicks={allClicks}/>
  </div>
  );
};

export default App;
