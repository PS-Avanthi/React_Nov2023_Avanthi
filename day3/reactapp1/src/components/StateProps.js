import {useState} from "react";

function StateProps() {
    //create state
    const [name, setName] = useState("Avanthi");
    const[num, setNum] = useState(19);
    const[student, setStudent] = useState({name:"Dustin",num:27});
    const nameHandler = () => {
        setName("Gobi🌼");
    };
    const numHandler = () => {
    
        let value = student.num;
        let nam = student.name;
        setStudent({name:"ash",num:++value});
    };
    return (
        <div>
            <h1>StateProps</h1>
            <h2>Hi {name}</h2>
            <h1>Reg no:{num}</h1>
            <h1>name {student.name} and age is {student.num}</h1>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={numHandler}>Increament Number</button>
        </div>
    );
}

export default StateProps;