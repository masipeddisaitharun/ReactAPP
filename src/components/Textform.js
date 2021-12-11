import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=(value)=>
    {
        const newtext=text.toUpperCase()
       settext(newtext)
    }
    const handleLoClick=(value)=>
    {
        const newtext=text.toLowerCase()
       settext(newtext)
    }
    const handleClear=()=>
    {
       const newtext=""
       settext(newtext)
    }
    const onchange=(event)=>
    { 
      settext(event.target.value)
    }
    const handleCopy=()=>{
        var text=document.getElementById("mytext")
       text.select();
       text.setSelectionRange(0,9999);
       navigator.clipboard.writeText(text.value);
    }
    const handleextraspaces=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "))
    }

    const[text,settext]=useState("Enter Text Here");
    return (
        <>
        <div className="container my-3">
          <div className="mb-3">
           <h1><label htmlFor="mytext" style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</label></h1>
            <textarea className="form-control" value={text} id="mytext" rows="7" onChange={onchange} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}></textarea>
         </div>
         <button type="button" className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
         <button type="button" className="btn btn-success mx-1 my-1" onClick={handleClear}>Clear Text</button>
         <button type="button" className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
         <button type="button" className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
         <button type="button" className="btn btn-success mx-1 my-1" onClick={handleextraspaces}>Remove Extra Spaces</button>

       </div>
       <div className="container my-2" style={{color:props.mode==="light"?"black":"white"}}>
           <h1>Your Text Summary</h1>
           <p>{text.split(" ").length} words and {text.length} characters</p>
           <p>It Takes {0.008 * text.split(" ").length} Minutes To Read</p>
           <h2>Preview Of Your Text</h2>
           <p>{text}</p>
       </div>
       </>
    )
}
