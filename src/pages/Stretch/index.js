import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Styles
import './styles.scss'

export default function Stretch() {
    const { id } = useParams();
    const [stretch, setStretch] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/stretches/${id}`)
            .then(response => {
                setStretch(response.data)
            })
    }, [id])

    return (
        <div className="Stretch">
            <div className="stretch-container">
                <div className="stretch-image-container">
                    <img 
                        src={stretch.main_image}
                        alt={stretch.title}
                        title={stretch.title}
                        className="stretch-image"
                    />
                </div>
                <div className="stretch-infos">
                    <h1>{stretch.title}</h1>
                    <p>{stretch.description_content}</p>
                </div>
            </div>
        </div>
    )
}