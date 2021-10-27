import React from 'react'; //optional
import { useState } from 'react';

function CounterButton() {
	const [clickAmount, setClickAmount] = useState(0);
	 
	const handleClick = () => {
		if (clickAmount < 10) {
			setClickAmount(clickAmount+1);
		} else {
			setClickAmount(0);
		}
	};
	return (
    <button className="CounterButton"
    onClick = {handleClick}>
      
      {clickAmount >0 &&  <p> You clicked me {clickAmount} times </p>}
      {clickAmount === 0 &&  <p> Resetting counter </p>}
    </button>
	);
}

export default CounterButton;
