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
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if (!data.error) {
              navigate('/coffees')
            }
        })       
    }

    function handleChange(event){
            setFormData({
                ...formData,[event.target.name]: event.target.value,
            })
        }

        return (
          <div class="cont"> 
               <form onSubmit={handleSubmit}>
            <label class="id">
              username:
             <input type="text" name="username" onChange={handleChange}/> 
              <i class="far fa-user"></i>
            </label>
            <br />
            <label class="id">
              password:
              <input type="text" name="password" onChange={handleChange}/>
              <i class="far fa-user"></i>
            </label>
            {/* <button type='button'>Cancel</button> */}
            <button type='submit'> Login </button>
          </form>

          </div>
       
        );
}

export default Login