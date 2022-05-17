import React, {useState} from 'react'

function State() {
    const [text, settext] = useState("hello");
    const handleOnClick = () =>{
        console.log("You clicked the button");
    }
    const handleOnChange = (event) =>{
        settext(event.target.value);
    }
    return (
    <div>
        <textarea className="form-control" id="text-area" rows="10" onChange={handleOnChange}></textarea>
        <button id = "text_btn">Convert</button>
    </div>
  )
}

export default State