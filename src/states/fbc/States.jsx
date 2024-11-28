import {useState} from "react";
const States=()=>{
    let [state, setState] = useState("Hello");
    console.log(state);
    function btnclick(){
        console.log("btn clicked");
        setState("Byee");
    }
    return(
        <div>
        <h1>States in FBC {state}</h1>
        <button onClick={btnclick}>Click</button>
        </div>
    );
};
export default States