import React from 'react'; //optional
import { useState } from 'react';

function TextRepeaterButton() {
	const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  

  const handleClick = () => {
    if (repetitions === 5) {
      setRepetitions(1);
    } else {
      setRepetitions(repetitions + 1);
    }
  }

	for (let i = 0; i < repetitions; i++) {
		textArray.push(<p key={i}>I like this text</p>);
	}
    return <button className="TextRepeaterButton"
    onClick={handleClick}>
    {textArray}
  </button>;
}

export default TextRepeaterButton;
