import React, { useRef, useState } from "react";
import "./App.css";

export function CharacterCounter() {
  const inputRef = useRef(null);
  const [length, setLength] = useState(0);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    // Update the character count based on textLength
    setLength(textLength)
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p>Character Count: {/* Display character count here */length}</p>
    </div>
  );
}
