import React, { useContext, useEffect, useState } from "react";
import './Card.css'
import Card from './Card'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

function Coffees() {
    const [coffees, setCoffees] = useState([])

    const navigate = useNavigate()

    const auth = useContext(AuthContext); // {currentUser, loading}

    console.log(auth)

    useEffect(() => {
        fetch('/coffees', { 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setCoffees(data)
        })       
    }, [])

    const onSignOut = () => {
        fetch('/users/:id', { 
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            },          
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
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
            </>
        )
}

export default Coffees

