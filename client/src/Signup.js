import { useState } from "react";
import { useNavigate } from "react-router-dom"

// error message for unniqueness
function Signup() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });


    // function handleSubmit(event) {
    //     event.preventDefault();
        
    //     fetch('/users', { 
    //         method: "POST", 
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         navigate("/coffees")
    //     })       
    // }

    function handleSubmit(event) {
        event.preventDefault();
        
        fetch('/users', { 
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
            ...formData,[event.target.id]: event.target.value,
        })
    }

    return (
        <>
          <h2 className="submitted"> Sign Up</h2>
          <form action= "#" onSubmit={handleSubmit} className="container">
            <div className="input_box">
                <label htmlFor="username">
                username:
                <input
                    placeholder="username"
                    type="textarea"
                    id="username"
                    onChange={handleChange}
                    value={formData.username}
                    required
                />
                </label>
            </div>
            <div className="input_box">
                <label htmlFor="password">
                    password:
                    <input
                    placeholder="password"
                    type="textarea"
                    id="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                />
                </label>

            </div>
            <div>
        </div>

            <input type="submit" value="Submit" className="sub"/>
            </form>

             { errors && (
                 <ul style={{ color: "red" }}>
                 {errors.map((error) => (
                     <li key={error}>{error}</li>
                 ))}
                 </ul>
                 )} 
               
            </>

);
}
export default Signup;

