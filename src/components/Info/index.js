const Info = ({user, handleEdit}) => {
    return (
 <div className="infos-container">
    <div className="infos-box">
        <div className='infos-left'>
            <div className='infos'> Pseudo : {user.username}</div>
            <div className='infos'> Email : {user.email}</div>   
        </div>
        <div className='infos'> Bio :  {user.biography}</div>
    </div> 
    <button className="modify-btn" onClick={handleEdit}>Modifier</button>
    </div>
    )
}

export default Info;