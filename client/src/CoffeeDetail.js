import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import CoffeeReview from "./CoffeeReview";
import './form.css'

function CoffeeDetail() {
    const params = useParams();
    const [coffee, setCoffee] = useState();
    const [coffeeReviews, setCoffeeReviews] = useState([])

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        fetch(`/coffees/${params.id}`, { 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setCoffee(data)
        })     
    }, [params.id])

    useEffect(() => {
        fetch(`/reviews?coffee_id=${params.id}`, { 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setCoffeeReviews(data)
        })     
    }, [params.id])

    function handleChange(event){
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('/reviews', { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...formData, coffee_id: params.id })
        })
        .then(resp => resp.json())
        .then(data => {
            setCoffeeReviews([data, ...coffeeReviews])
        })       
    }

    const onDeleteReview = (reviewId) =>{
        const updatedReviews =coffeeReviews.filter(cr => {
            return cr.id !== reviewId 
        })
        setCoffeeReviews(updatedReviews)
    }
   
   
    const onUpdateReview = (updatedReview) => {
        const updatedReviews =  coffeeReviews.map(cr => {
            return updatedReview.id === cr.id ? updatedReview : cr
        })

        setCoffeeReviews(updatedReviews)
    }

 
    return <div>
        {coffee && <>
            <h2>{coffee.name}</h2> 
        </>}
        <form action= "#" onSubmit={handleSubmit} className="container">
            <div className="input_box">
                <label htmlFor="title">
                Title:
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
                    Description:
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
            </form>
        {coffeeReviews.map(item => {
            return <CoffeeReview review={item} key={item.id} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview}/>     
        })}
    </div> 
}

export default CoffeeDetail;


