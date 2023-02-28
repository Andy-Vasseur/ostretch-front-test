import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Styles
import './styles.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Card = (props) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = (event) => {
        event.preventDefault();
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="Card">
            <Link to={"/stretches/stretch"} className="card" title={props.title}>
                <div className='card-content'>
                    <img src={props.img} alt={props.alt} title={props.hover} />
                    <div className="card-footer">
                        <h3>{props.title}</h3>
                        {props.isLogged ? (
                            <span onClick={handleFavorite} className="favorite-icon">
                                {isFavorite ? <AiFillHeart className='filled-icon' /> : <AiOutlineHeart />}
                            </span>
                        ) : (
                            <span className="favorite-icon" />
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
