import React, { useState } from "react";
function Toogle() {
    const [name,setName] = useState("IlayaThalapathy");
    const transformationHandler = () => {
        if (name === "IlayaThalapathy")
        setName("Thalapathy");
        else
        setName("IlayaThalapathy");
    };
    return (
        <div>
            <h1>Toogle</h1>
            <hr></hr>
            <h2>Anna varar valividu {name}</h2>
            <button onClick={transformationHandler}>Toogle</button>
        </div>
    )
}
export default Toogle;