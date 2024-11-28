import Navbar from "./Components/navbar";
import NavbarCBC from "./Components/navbarCBC";
import States from "./states/fbc/States";
const App=()=>{
    return(
        <div>
            <Navbar />
            <h1>Yhi wali lunga, yhi wali lunga, nhi manunga, nhi manunga</h1>
            <NavbarCBC></NavbarCBC>
            <States></States>
        </div>
    );
};

export default App;