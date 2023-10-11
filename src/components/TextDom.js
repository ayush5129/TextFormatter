import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to upperCase", "success");
    }
    const handleLoClick = () => {
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowerCase", "success");
    }
    const handleClearClick = () => {
        console.log("Clear text was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard ", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpace has been removed", "success");
    }
    const downloadTxtFile = () => {
        const texts = [text]
        const file = new Blob(texts, { type: 'text/plain' });
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "100ideas-" + Date.now() + ".txt";
        document.body.appendChild(element);
        element.click();
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Covert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Covert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={downloadTxtFile}>Download file</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>ClearText</button>
            </div>
            <div className="container my-3 ">
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words ans {text.length} characters</p>
                <p> Time taken to read {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
