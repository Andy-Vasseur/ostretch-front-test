import React from 'react';

// Styles
import './styles.scss';
import Error from '../../assets/img/error.jpg';

const Error404 = () => {
  return (
    <div className='ErrorPage'>
      <h1>Erreur 404: Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez est introuvable.</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={Error} alt="Erreur 404" width= '700' />
    </div>
  </div>
  );
}

export default Error404;