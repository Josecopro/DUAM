import "./styles/Card.scss"
import React from 'react';

const PokemonCard = ({ name, image, type1, type2, description, link }) => {
    return (
        <div className="Card Transition">
            <div className="Card__Gradient Transition">
                <img className="Card__Image" src={image} alt={name} />
            </div>
            <div className="Card__Items">
                <div>
                    <span className="Card__Type">
                        <img src={type1.image} alt={type1.name} />
                        <p>{type1.name}</p>
                    </span>
                    <span className="Card__Type">
                        <img src={type2.image} alt={type2.name} />
                        <p>{type2.name}</p>
                    </span>
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="Card__Link Transition">
                <a className="Card__link--active" href={link}>Conoce más&nbsp;&nbsp;</a>
            </div>
        </div>
    );
};

export {PokemonCard};