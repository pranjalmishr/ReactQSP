import Navbar from "./Components/navbar";
import NavbarCBC from "./Components/navbarCBC";
import States from "./states/fbc/States";
import Counter from "./states/fbc/Counter";
import StateInCBC from "./states/cbc/StateInCBC";
import Parent from "./pops/Parent";
const App=()=>{
    return(
        <div>
            <Navbar />
            <h1>Practise ReactJs</h1>
            <NavbarCBC></NavbarCBC> 
             <States></States>
            <Counter></Counter>
            <StateInCBC/>
            <Parent></Parent>
          
        </div>
    );
};

export default App;