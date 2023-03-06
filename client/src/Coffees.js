import React, { useEffect, useState } from "react";

function Coffees() {
    const [coffees, setCoffees] = useState([])

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

    console.log('coffees', coffees)
    
    return (
            <>
                <h1 className="title"> Coffee </h1>
                <ul className="getData">
                    {coffees.map((item) => {
                        return <div key={item.id}>
                            <div>Name: {item.name} </div>
                            <div>Country: {item.country}</div>
                            <div>Price: {item.price}</div>
                        </div>
                    })}
                </ul>
            </>
        )
}

export default Coffees