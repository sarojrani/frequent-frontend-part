import React, {  useState } from "react";
import "./index.css";
const Register=()=>{
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Email, setEmail] = useState("");
    const [Country]=useState("")
    const [State]=useState("")
    const [City]=useState("")
    const [Gender]=useState("")
    const [DOB]=useState("") 
    const [Age]=useState("")


   

    const collectData = async () => {
        console.log(Fname,Lname,Email,Country,State,City,Gender,DOB,Age);
        let result = await fetch('http://localhost:4000/register', {
            method: 'post',
            body: JSON.stringify({Fname,Lname,Email,Country,State,City,Gender,DOB,Age  }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.log(result)
    }
    return(
        <>
     
     <div className="container">
     <form className="formContainer">
     <h1 className="form" >Register Form</h1>
        <label htmlFor="Fname">FirstName:</label>
        <input  id="Fname" type="text" value={Fname} onChange={(e)=>setFname(e.target.value)} placeholder="Enter your FirstName" />
        <br/><br/>
        <label htmlFor="Lname">LastName:</label>
        <input id="Lname" type="text"  value={Lname} onChange={(e)=>setLname(e.target.value)} placeholder="Enter your LastName"/>
        <br/><br/>
        <label htmlFor="email">Email : </label>
        <input  id="email" type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your emailId"/>
        <br/><br/>
        <label htmlFor="country"> choose your Country:</label>
        <select name="country" id="country">
        <option value="india">India</option>
        <option value="Austrailia">Austrailia</option>
        <option value="Canada">Canada</option>
        <option value="Germany">Germany</option>
        </select>
        <br/><br/>
  
        <label htmlFor="state"> choose your state:</label>
        <select name="country" id="state">
        <option value="Bihar">Bihar</option>
        <option value="nepal">nepal</option>
        <option value="urisha">urisha</option>
        <option value="u.p">u.p</option>
        </select>

        <br/><br/>

        <label htmlFor="city"> choose your city:</label>
        <select name="city" id="city">
        <option value="patna">patna</option>
        <option value="Muzaffarpur">Muzaffarpur</option>
        <option value="Motihari">Motihari</option>
        <option value="gaya">gaya</option>
        </select>
<br/><br/>
        <label>select your Gender:</label>
        <br/>
        <input  type="radio" id="male" value="Male" />
        <label htmlFor="male">Male</label>
        <br/>
        <input  type="radio" id="female" value="female" />
        <label htmlFor="female">female</label>
        <br/>
        <input  type="radio" id="other" value="Other" />
        <label htmlFor="other">Other</label>
        <br/><br/>

        <label>
    Enter your Date Of Birth:
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
    <span className="validity"></span>
  </label>
  <br/><br/>
  <label>Age:
  <input type="number" placeholder="Enter your Age" required/></label>
  <p>
    <button onClick={collectData}>Submit</button>
  </p>
     </form>
     </div>
        </>
    )
}
export default Register;