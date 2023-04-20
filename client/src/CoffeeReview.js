import { useContext, useState } from "react"
import { AuthContext } from "./contexts/authContext";

function CoffeeReview({ review, onUpdateReview, onDeleteReview }) {
    const [showEdit, setShowEdit] = useState(false)
    const auth = useContext(AuthContext)
      
    const [formData, setFormData] = useState({
        title: review.title,
        description: review.description,
    });

    function handleChange(event){
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }
    function handleDeleteClick() {
    fetch(`/reviews/${review.id}`, {
        method: "DELETE",
    })
    .then((res) => {
        if (res.ok){
            onDeleteReview(review.id)
        }
    })
        
    }
    const toggleShowEdit = () => {
            setShowEdit(!showEdit)
            setFormData({
                title: review.title,
                description: review.description,
            })  
       
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        fetch(`/reviews/${review.id}`, {
            method: "PATCH" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())  
        .then((updatedReview)  => { 
            onUpdateReview(updatedReview)
            toggleShowEdit() 
            setFormData()
        })
    }
    const renderForm = () => {
        return  <form action= "#" onSubmit={handleSubmit} className="container">
        <div className="input_box">
            <label htmlFor="title">
            title:
            <input
                placeholder="title"
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
                required
            />
            </label>
        </div>
        <div className="input_box">
            <label htmlFor="description">
                description:
                <input
                placeholder="description"
                type="textarea"
                name="description"
                onChange={handleChange}
                value={formData.description}
                required
            />
            </label>
        </div>

        <input type="submit" value="Submit" className="sub"/>
        <button type="button" onClick={toggleShowEdit}>Cancel</button>
        </form>
    }
   

    const renderReview = () => {
        return  <div>
            <div>User: {review.user?.username}</div>
            <div>Title: {review.title}</div>
            <div>Description: {review.description}</div>
         {auth.currentUser && review.user_id === auth.currentUser.id ? <button type="button" onClick={toggleShowEdit}>Edit</button> : null}
         {auth.currentUser && review.user_id === auth.currentUser.id ? <button type="button" onClick={handleDeleteClick}>Delete</button> : null}
    
        </div> 
    }
    console.log(review)
    return <div>
        {showEdit ? renderForm() : renderReview()}
    </div> 
}

export default CoffeeReview;


// Show information about the user that left the review