import Card from '../Card'
import axios from 'axios';
import plus from '../../assets/img/add-icon.png'
import { useState, useEffect } from 'react';

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
      
          axios.get(`http://localhost:3000/user/me/stretches`, config)
            .then(response => {
              setBookmarks(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }, [token]);

        const handleDelete = (id) => {
            console.log(id);
            const config = {
                headers: { Authorization: `Bearer ${token}` }
              };
              axios.delete(`http://localhost:3000/user/me/stretches/${id}`, config)
              .then(response => {
                setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
              })
              .catch(error => {
                console.log(error);
              });
          };
        
    
    return(
        <div className="bookmarks-container">
        <div className='bookmarks-cards'>
        {
            bookmarks.map((stretch) => (
            <div key={stretch.id} className='card-container'>
            <Card
            title={stretch.title}
            description={stretch.description}
            img={stretch.main_image}
            alt={stretch.title}
            hover={stretch.title}
            key={stretch.id}
            link={stretch.id}
            />
            <button className='delete-btn' onClick={()=>handleDelete(stretch.id)}>X</button>
            </div>
         ))
        }
        <Card title="Ajouter un favoris" img={plus} link={"/stretches"}/>
        </div>

   </div>
    )
}

export default Bookmarks;