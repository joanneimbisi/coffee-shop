import { NavLink } from 'react-router-dom';
import './Card.css'

function Card({ coffee }) {
    return (
      <div className="card-container"  tabIndex="0" class="e-card e-card-horizontal">
        <div className="image-container">
          <img src={coffee.image_url} alt="coffeeimage" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{coffee.name}</h3>
          </div>
          <div className="card-body">
            <p>{coffee.country}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <NavLink to={`/coffees/${coffee.id}`}><h5>View more</h5></NavLink>
          </button>
        </div>
      </div>
    );
}

export default Card;