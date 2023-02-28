import React from 'react';

// Styles
import './styles.scss'

const MySpace = () => {
    return (
        <div className='MySpace'>

            <div className="my-infos">
                <h2>Mes informations</h2>
                <div className="inputs-left">
                    <input type="text"
                        id='firstname'
                        placeholder='Votre prénom...'
                    />

                    <input type="text"
                        id='lastname'
                        placeholder='Votre nom...'
                    />

                    <input type="email"
                        id='email'
                        placeholder='Votre adresse email...'
                    />
                </div>
                <div className="inputs-right">
                    <textarea name="message"
                        id=""
                        cols="30"
                        rows="10"
                    />
                </div>
                <button>
                    Modifier
                </button>
            </div>

            <div className="my-favorites">
                <h2>Mes favoris</h2>
                <p> Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus.Lorem ipsum dolor sit amet consectetur.</p>
            </div>

        </div>
    );
};

export default MySpace;