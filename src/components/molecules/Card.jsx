import "./styles/Card.scss"
import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';

const AreaCard = ({ name, image, description, link }) => {
    useEffect(() => {


    }, []);7
    const navigate = useNavigate();

    const goToRoute = (route) => {
      navigate(route);
    };
    return (
        <div className="Card Transition">
            <div className="Card__Gradient Transition">
                <img className="Card__Image" src={image} alt={name} />
            </div>
            <div className="Card__Items">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="Card__Link Transition">
                <a className="Card__link--active" href={goToRoute(link)}>Conoce más</a>
            </div>
        </div>
    );
};

export {AreaCard};