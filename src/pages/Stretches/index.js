import axios from 'axios';
import { Component } from 'react';

// Components
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';

// Styles
import './styles.scss';

export default class Stretches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stretches: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/stretches')
            .then(response => {
                let stretches = response.data;
                this.setState({ stretches })
            })
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
                </div>

                <main>
                    <div className='stretches-container'>
                        <div className='category'>
                            <ul>
                                {
                                    filterData.map((stretch) => (
                                        <Card
                                            id={stretch.id}
                                            title={stretch.title}
                                            description={stretch.description}
                                            img={stretch.main_image}
                                            alt={stretch.title}
                                            hover={stretch.title}
                                            key={stretch.id}
                                            link={stretch.id}
                                            isLogged={this.props.isLogged}
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