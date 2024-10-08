import React from 'react';

const Box = (props) => {

  let result;
  if (
    props.title === "Computer" &&
    props.result !== "Tie" &&
    props.result !== "" 
  ) {
      result = props.result === "Win" ? "Lose" : "Win";
    } else {
      result = props.result;
    }
    if (props.title === "Computer") {
      console.log("computer" , result);
    }
    
  return (
    <div className= {`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className='item-image' src={props.item && props.item.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMuxLBy21AA4mtGh_Ap-yWbUKRyTBBaEbQg&s'} alt=""/>
        <h2>{result}</h2>
    </div>
  );
};

export default Box;