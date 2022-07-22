import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearTextClick = ()=>{
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.getColorByTheme("navbarTextArea", props.mode === 'dark' ? 'light' : 'dark',props.theme), color: props.mode === 'dark' ? 'white' : 'black'  }} id="myBox" rows="8" placeholder="Enter text here"></textarea>
            </div>
            <button className={`btn btn-primary text-${props.mode === 'light' ? 'light' : 'dark'}`} style={{backgroundColor: props.getColorByTheme("body", props.mode, props.theme), borderColor: props.getColorByTheme("body", props.mode, props.theme) }} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-primary mx-2 text-${props.mode === 'light' ? 'light' : 'dark'}`} style={{backgroundColor: props.getColorByTheme("body", props.mode, props.theme), borderColor: props.getColorByTheme("body", props.mode, props.theme) }}onClick={handleDownClick}>Convert to Lowercase</button>
            <button className={`btn btn-primary mx-2 text-${props.mode === 'light' ? 'light' : 'dark'}`} style={{backgroundColor: props.getColorByTheme("body", props.mode, props.theme), borderColor: props.getColorByTheme("body", props.mode, props.theme) }}onClick={handleClearTextClick}>Clear Text</button>
            <div className="container my-3" style={{backgroundColor: props.getColorByTheme("body", props.mode === 'dark' ? 'light' : 'dark', props.theme), color: props.mode === 'dark' ? 'white' : 'black'  }}>
                <h1>Text Summary</h1>
                <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something"}</p>
            </div>
        </div>
    )
}
