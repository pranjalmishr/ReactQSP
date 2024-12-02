import {useState} from "react";
const States=()=>{
    let [state, setState] = useState("Hello");
    let[cart,setCart]= useState("add to cart")
    console.log(state);
    //function btnclick(){
   function update(){
        console.log("btn clicked");
        setState("Byee");
    }
    return(
        <div>
        <h1>States in FBC {state}</h1>
        <button onClick={update}>Click</button>
        <button onClick={()=>{setCart("go to cart")}}>{cart}</button>
        </div>
    );
    };

export default States