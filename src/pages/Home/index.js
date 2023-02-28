import React from 'react';
import { Link } from 'react-router-dom'

// Components
import Wrapper from '../../components/Wrapper';
import HumanBody from '../../components/HumanBody/HumanBody';

// Styles
import './home.scss';

const Home = () => {
    return (
        <>
            <header>
                <div className='Home'>
                    <Wrapper
                        wrapperTitle="Une nouvelle approche des étirements"
                        wrapperDescription="Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus."
                    />
                    <Link className='discover-button' to="/stretches">
                        Découvrir
                    </Link>
                </div>
            </header>

            <main>
                <HumanBody />
            </main>
        </>
    );
};

export default Home;