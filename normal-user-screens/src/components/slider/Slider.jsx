import './slider.css';
import { useState } from 'react';

function Slider() {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrowClick = () => {
      setScrollX(scrollX + 300); // Adjust the scroll amount as needed
    };
  
    const handleRightArrowClick = () => {
      setScrollX(scrollX - 300); // Adjust the scroll amount as needed
    };
  return (
    <div className='slider-main-container'>
        <div className='slider-arrow' onClick={handleLeftArrowClick}>
        &lt;
      </div>
      <div className='slider-content' style={{ transform: `translateX(${scrollX}px)` }}>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
        <div className='slider-box'></div>
      </div>
      <div className='slider-arrow' onClick={handleRightArrowClick}>
        &gt;
      </div>
    </div>
  );
}

export default Slider;