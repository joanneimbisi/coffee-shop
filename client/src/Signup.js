import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        // email: "",
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
            console.log(data)
            navigate("/coffees")
        })       
    }

    function handleChange(event){
        setFormData({
            ...formData,[event.target.id]: event.target.value,
        })
    }

    return (
        <>
          <h4 className="submitted">Submitted Cities</h4>
          <form action= "#" onSubmit={handleSubmit} className="container">
            <div className="input_box">
                <label htmlFor="email">
                email:
                <input
                    placeholder="email"
                    type="textarea"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
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
            </>

);
}
export default Signup;