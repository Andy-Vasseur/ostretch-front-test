import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Toggle = ({onLogout, onClose}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onLogout();
    onClose();
    navigate('/')
  }
  return (

    <div className="menu">
        <NavLink to="/" className="space">Mon espace </NavLink>
        <NavLink to="/" className="space" onClick={handleClick}>Déconnexion </NavLink>
  </div>  
  );
}

    export default Toggle;