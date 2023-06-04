import {Link} from "react-router-dom";
import "./index.css"
const NavBar=()=>{
    return(
        <>
<ul className="nav">
    <li><Link to="/" >Register</Link></li>
    <li><Link to="/list" >List</Link></li>
</ul>
        </>
    )
}
export default NavBar;