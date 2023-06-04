import Register from "./Register";
import List from "./List";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./Nav";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Register />} ></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
