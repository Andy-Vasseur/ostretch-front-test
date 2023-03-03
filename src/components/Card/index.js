import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import './styles.scss'

const Card = (props) => {
    

    return (
        <div className="Card">
            <Link to={`/stretches/${props.link}`} className="card">
                <div className='card-content'>
                    <img
                        src={props.img}
                        alt={props.alt}
                        title={props.hover}
                    />
                    <div className="card-footer">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Card;
