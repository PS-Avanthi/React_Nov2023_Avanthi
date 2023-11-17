import React, {useState} from "react";
function TogglerMessage() {
    const [showMessage,setShowMessage]=useState(false);
    const togglerMessage = () => {
        setShowMessage(!showMessage);
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={togglerMessage}>
            {showMessage ?"Hide Message" : "Show Message"}
            </button>
            {showMessage && <p>HI HOW ARE YOU ?</p>}

        </div>
    )
}
export default TogglerMessage;