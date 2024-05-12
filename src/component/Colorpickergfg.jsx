import React,{useState} from 'react'
import { SketchPicker } from 'react-color';

export default function Colorpickergfg() {
    const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color, white in this case
    const [showColorPicker, setShowColorPicker] = useState(false); // To toggle the visibility of the color picker

    const handleColorChange = (color) => {
        setBgColor(color.hex);
      };
  return (
    <div>
       <button onClick={() => setShowColorPicker(!showColorPicker)}>Pick a color</button>
      
      {/* Conditionally render the color picker based on the state */}
      {showColorPicker && (
        <div>
          <SketchPicker color={bgColor} onChange={handleColorChange} />
        </div>
      )}

      {/* Apply selected color as background */}
      <div style={{ backgroundColor: bgColor, width: '200px', height: '200px' }}>
        {/* Content */}
      </div>
    </div>
  )
}
{/* <Route path="/about">
<About/>
</Route>

<Route path="/">
<Textform heading="Enter-text-here!" button="Convert Upper Case" mode={mode} lowercase="Convert to Lower Case" clear="Clear" copy="Copy Text" />
</Route> */}