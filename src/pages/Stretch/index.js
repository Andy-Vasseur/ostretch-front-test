import React from 'react';

// Styles
import './styles.scss';
import Illustration from '../../assets/img/illustration1.svg';

const Stretch = () => {
    return (
        <div className='Stretch'>
            <div className="stretch-container">
                <div className="stretch-ilustration-container">
                    <img
                        src={Illustration}
                        alt=""
                        title='Etirement trapèze'
                        className='stretch-illustration'
                    />
                </div>
                <div className="stretch-infos">
                    <h1>Etirement trapèze</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus.Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus.Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stretch;