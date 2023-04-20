import { useState } from "react";
import { useNavigate } from "react-router-dom"


function Signup() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });


    function handleSubmit(event) {
        event.preventDefault();
        
        fetch('/users', { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            navigate("/coffees")
        })       
    }

    function handleChange(event){
        setFormData({
            ...formData,[event.target.id]: event.target.value,
        })
    }

    // function goLogin(){
    //     navigate('/login')
    // }

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

            <input type="submit" value="Submit" className="sub"/>
            </form>
                {/* Already have an account? <button type="button" onClick={goLogin}> Login </button> */}
            </>

);
}
export default Signup;

/*Create a unique username and password
When people signup, they see the coffees
*/