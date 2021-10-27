import React from 'react'; //optional
import { useState } from 'react';

function AngryButton(props) {
	const [anger, setAnger] = useState(0);
  
	const handleClick = () => {
		if (anger < 1) {
			let temp = Number(anger) + 0.1;
			setAnger(temp.toFixed(2));
		} else {
			setAnger(0);
		}
	};

	return (
		<button
			style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
			onClick={handleClick}
			className="AngryButton">
			{anger > 0 && <span>Don't click me too much!</span>}
			{anger === 0 && <span>Rawr!</span>}
		</button>
	);
}
export default AngryButton;
