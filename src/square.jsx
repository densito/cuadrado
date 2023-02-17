import React, { useState, useEffect } from 'react';

function ColorChangingBox() {
  const [currentColor, setCurrentColor] = useState('black');
  const [lastRandomColor, setLastRandomColor] = useState('black');
  const [isChanging, setIsChanging] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isChanging) {
      intervalId = setInterval(() => {
        const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setCurrentColor(newColor);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isChanging]);

  const handleMouseEnter = () => {
    const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setCurrentColor(newColor);
  };

  const handleMouseLeave = () => {
    setIsChanging(false);
    setLastRandomColor(currentColor);
  };

  const handleClick = () => {
    setIsChanging(false);
    setLastRandomColor(currentColor);
  };

  const boxStyle = {
    width: '255px',
    height: '255px',
    backgroundColor: isChanging ? currentColor : lastRandomColor
  };

  return (
    <div style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} />
  );
}

export default ColorChangingBox;
