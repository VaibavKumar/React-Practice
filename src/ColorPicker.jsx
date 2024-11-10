import React,{useState} from "react";

function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");
     function onchangecolor(event){
        setColor(event.target.value)
     }

    return(<div className="colorpicker-container">
        <h1 className="h1tag">Colour Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>selected colour: {color}</p>
        </div>
        <label className="lclass">select a color</label>
        <input className="iclass" type="color" value={color} onChange={onchangecolor} />
    </div>);
}
export default ColorPicker