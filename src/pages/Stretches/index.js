import axios from 'axios';
import { Component } from 'react';

// Components
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';

// Styles
import './styles.scss';
import CardImage from '../../assets/img/cardimage.jpg';

export default class Stretches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stretches: [],
            searchTerm: '',
            isLogged: this.props.isLogged
        }
    }

    componentDidMount() {
        axios.get('http://45.82.75.212:3001/stretches')
            .then(response => {
                let stretches = response.data;
                this.setState({ stretches })
            })

        if(this.state.isLogged === true) {
            console.log('Vous êtes connecté')
        } 
        else {
            console.log('Vous n\'êtes pas connecté')
        }
    }
 
    handleSearch = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    filterData = () => {
        const { searchTerm } = this.state
        return this.state.stretches.filter((rawdata) => {
            return rawdata.title.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }

    render() {
        const filterData = this.filterData()
        return (
            <div className='Stretches'>
                <div>
                    <Wrapper
                        wrapperTitle="Tous nos étirements disponibles"
                        wrapperDescription="Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus."
                    />
                    <input
                        type="search"
                        name="search"
                        id="searchInput"
                        placeholder='Votre recherche...'
                        value={this.state.searchTerm}
                        onChange={this.handleSearch}
                    />
                    {/* <button onClick={this.state.handleLogin}>Login</button>
                    <button onClick={this.state.handleLogout}>Logout</button> */}
                </div>

                <main>
                    <div className='stretches-container'>
                        {/* Cou */}
                        <div className="category">
                            <h2>Cou</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                            isLogged={this.state.isLogged}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Bras */}
                        <div className="category">
                            <h2>Bras</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Avant Bras */}
                        <div className="category">
                            <h2>Avant Bras</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Poitrine */}
                        <div className="category">
                            <h2>Poitrine</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Ventre */}
                        <div className="category">
                            <h2>Ventre</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Dos */}
                        <div className="category">
                            <h2>Dos</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Hanche */}
                        <div className="category">
                            <h2>Hanche</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Fesses */}
                        <div className="category">
                            <h2>Fesses</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Cuisses */}
                        <div className="category">
                            <h2>Cuisses</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Jambes */}
                        <div className="category">
                            <h2>Jambes</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Pieds */}
                        <div className="category">
                            <h2>Pieds</h2>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={CardImage}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}