import { useState } from "react";

const InfoForm = ({user}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [biography, setBiography] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleBioChange = (e) => {
        setBiography(e.target.value)
    }

    return (
       
    <form className="infos-container">
        <div className="infos-box">
        <div className='infos-left'>
        <label>
          Pseudo:
        <input type="text" name="name" value={username} className='infos' placeholder={user.username} onChange={handleUsernameChange}/> 
        </label>
        <label>
          Email:
        <input type="email" name="email" value={email} className='infos' placeholder={user.email} onChange={handleEmailChange}/> 
        </label>
        </div>
        <label>
          Bio:
        <input type="text" name="bio" value={biography} className='infos'  placeholder={user.biography} onChange={handleBioChange}/>
        </label>
        </div>
        <button className="modify-btn" >Enregistrer</button>
    </form> 
    )
}

export default InfoForm;