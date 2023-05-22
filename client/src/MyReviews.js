
import { AuthContext } from "./contexts/authContext";
import React, { useContext } from "react";


function MyReviews (){
    
        const auth = useContext(AuthContext)
        // console.log(auth.currentUser.username)
        
 
  return (
    <>
    <div>{auth.currentUser.username}'s Reviews</div>
    {auth.currentUser.reviews.map((mr,idx) => 
    <div key={idx}>
        
    Coffee Id: {mr.coffee_id} &emsp;
    Title: {mr.title} &nbsp;
    Description: {mr.description}

       

     </div>) }
     </>

  )
}
export default MyReviews
