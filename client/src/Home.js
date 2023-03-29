import React, { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import "./home.css"

function Home(){
     const auth = useContext(AuthContext); // { currentUser: null }

    console.log(auth)

    return (
        <>
          <div className="container">
            <h3 className="home_title">  </h3>
            <p className="home">
            </p>  
             <img src="https://c.files.bbci.co.uk/DB08/production/_100827065_gettyimages-635793190.jpg" alt="coffee" className="pic"/> 
            </div>
              
        </>
      )
}

export default Home

/* Greeting, logo, picture, and searchbar
 - User can search for coffees
 */