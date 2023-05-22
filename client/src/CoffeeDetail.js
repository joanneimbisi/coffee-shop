import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import CoffeeReview from "./CoffeeReview";
import './form.css'

function CoffeeDetail({ coffees, setCoffees }) {
    const params = useParams();
    const [coffee, setCoffee] = useState();
    const [coffeeReviews, setCoffeeReviews] = useState([])

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        const selectedCoffee = coffees.find(item => item.id.toString() === params.id);
        if (selectedCoffee) {
            setCoffee(selectedCoffee)
            setCoffeeReviews(selectedCoffee.reviews)
        }
    }, [coffees, params.id])


 

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
            const modifiedCoffeeIndex = coffees.findIndex(item => item.id.toString() === params.id)
            const modifiedCoffee = { ...coffee, reviews: [data, ...coffeeReviews] }
            const updatedCoffees = [...coffees]
            updatedCoffees[modifiedCoffeeIndex] = modifiedCoffee
            setCoffees(updatedCoffees)
        })       
    }

    const onDeleteReview = (reviewId) =>{
        const modifiedCoffeeIndex = coffees.findIndex(item => item.id.toString() === params.id)
        const updatedReviews = coffeeReviews.filter(cr => {
            return cr.id !== reviewId 
        })
        const modifiedCoffee = { ...coffee, reviews: updatedReviews }
        const updatedCoffees = [...coffees]
        updatedCoffees[modifiedCoffeeIndex] = modifiedCoffee
        setCoffees(updatedCoffees)
    }

   
    const onUpdateReview = (updatedReview) => {
        const updatedReviews =  coffeeReviews.map(cr => {
            return updatedReview.id === cr.id ? updatedReview : cr
        })
        const modifiedCoffeeIndex = coffees.findIndex(item => item.id.toString() === params.id)
        const modifiedCoffee = { ...coffee, reviews: updatedReviews }
        const updatedCoffees = [...coffees]
        updatedCoffees[modifiedCoffeeIndex] = modifiedCoffee
        setCoffees(updatedCoffees)
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


