import React, { useContext, useEffect } from "react";
import './Card.css'
import Card from './Card'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

function Coffees({coffees}) {
    const navigate = useNavigate()

    const auth = useContext(AuthContext); 
    console.log(coffees, "coffees")
    console.log(auth)
    

    
    const onSignOut = () => {
        fetch(`/users/${auth.currentUser.id}`, { 
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            },          
        })
        .then(resp => resp.json())
        .then(data => { 
            console.log(data)
            auth.setCurrentUser(undefined)
            navigate('/')            
        }) 
    }

    useEffect(() => {
        if (!auth.loading && !auth.currentUser) {
            navigate('/login') 
        }
    }, [auth.loading, auth.currentUser, navigate])

    if (!auth.currentUser) return null;

   
    
    return (
                
            <>
                <button type='button' onClick={onSignOut}>Logout</button>
                <h1 className="title"> OUR SELECTIONS </h1>
                    {coffees.map((item) => {
                        return <Card key={item.id} coffee={item} />
                    })}
                
                    {/* <li>{
            auth.currentUser && JSON.stringify(renderMyCoffees())
          }</li>
                 */}
      
            </>
            
        )
}

export default Coffees

