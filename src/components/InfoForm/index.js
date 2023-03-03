import { useState } from "react";
import axios from 'axios';

const InfoForm = ({user, setUser, setIsEditOpen}) => {

  const [userValue, setUserValue] = useState({
    username: "",
    biography: ""
  })

    const handleChange = (event) => {
      const { name, value } = event.target;
      setUserValue({
          ...userValue,
          [name]: value
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault();


      const updatedData = {};

      if (userValue.username !== "") {
        updatedData.username = userValue.username;
      }
    
      if (userValue.biography !== "") {
        updatedData.biography = userValue.biography;
      }

      const token = localStorage.getItem('token'); // Récupérer le jeton d'authentification stocké dans le stockage local
      console.log(token)

      axios.patch('http://localhost:3001/user/me', updatedData, {
      headers: {
        'Authorization': `Bearer ${token}`, // Ajouter le jeton d'authentification à l'en-tête de la demande
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        axios.get('http://localhost:3001/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const userFound = response.data.userFound;
          setUser(userFound);
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch(error => {
        console.error(error);
      });
      setIsEditOpen(false);
    }

    return (
       
    <form className="infos-container" onSubmit={handleSubmit}>
     <p>
          Mon pseudo:
      </p>
        <input type="text" name="username" value={userValue.username} className='infos' placeholder={user.username} onChange={handleChange}/> 
      
        <p>
          Ma bio:
        </p>
        <textarea rows="5" cols="33" type="text" name="biography" value={userValue.biography} className='infos'  placeholder={user.biography} onChange={handleChange}/>
  

        <button className="modify-btn" >Enregistrer</button>
    </form> 
    )
}

export default InfoForm;

