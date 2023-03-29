/*
- frontend
    - Fetch reviews
    - Create formData with title and description 
    - When submitting a review, update the page (add reviews to state)
    - user should only be able to edit/delete review if they're logged in & the creator of that review

  - backend
    - create reviews table with migration 
    - create model... with validation. 
    - create controller ... (add serializer) render json: review
    - route
*/

import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

//- Coffee description - Coffee show -- DONE
//- Add a Review - REview Create  ----- DONE
//- All the reviews - Reviews index with coffee id - DONE

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
    
    return <div>
        {coffee && <>
            <div>Name: {coffee.name}</div>
        </>}
        <form action= "#" onSubmit={handleSubmit} className="container">
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
            </form>
        {coffeeReviews.map(item => {
            return  <div key={item.id}>
                <div>Title: {item.title}</div>
                <div>Description: {item.description}</div>
            </div>       
        })}
    </div> 
}

export default CoffeeDetail;


