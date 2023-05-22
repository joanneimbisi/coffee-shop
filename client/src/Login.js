import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./contexts/authContext";
import "./form.css"

/* 
- User may log in and out (toggle?)
- w/ secure password and stay logged in via user ID in the session hash
- Use the React hook useContext to persist your logged in user object in front end state and avoid props drilling.
*/

function Login(){
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
      if (auth.currentUser) {
        navigate('/coffees')
      }
  
    }, [auth.currentUser, navigate])

    function handleSubmit(event) {
        event.preventDefault();

        fetch('/login', { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => {
          if (resp.ok){
           resp.json()
          .then(navigate("/coffees"))
          } else {
            resp.json().then((errorData) => {
              console.log(errorData.errors)
              setErrors(errorData.errors)})
          
    }
        })       
    }
    function handleChange(event){
            setFormData({
                ...formData,[event.target.name]: event.target.value,
            })
        }

        return (
          <div className="container"> 
            <h2> Login </h2>
               <form onSubmit={handleSubmit}>
            <label className="id">
              username:
             <input type="text" name="username" onChange={handleChange}/> 
              <i className="far fa-user"></i>
            </label>
            <br />
            <label className="id">
              password:
              <input type="text" name="password" onChange={handleChange}/>
              <i className="far fa-user"></i>
            </label>
            <button type='submit'> Login </button>
          </form>
          {/* { errors && (
                 <ul style={{ color: "red" }}>
                 {errors.map((error) => (
                     <li key={error}>{error}</li>
                 ))}
                 </ul>
                 )}   */}
                 <div style={{color:"red"}}>
                  {errors}
                 </div>
          </div>


       
        );
}

export default Login