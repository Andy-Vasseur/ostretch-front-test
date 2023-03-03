// Styles
import axios from 'axios';
import './formulaire.scss';
import { useState, useRef } from 'react';

const ContactForm = () => {
    const contactFormRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            subject,
            message
        };

        axios.post('http://localhost:3001/contact', formData)
            .then(response => response.data)
            .then(data => {
                if (data === 'success') {
                    console.log("email sent");
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                } else {
                    console.log("Something went wrong");
                }
            });
    };

    return (
        <form ref={contactFormRef} className="form__contact" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Votre nom</label>
                <input type="text" id="name" placeholder="Votre nom/prénom ici" value={name} onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Votre e-mail</label>
                <input type="email" id="email" placeholder="Votreadresse@mail.com" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor="subject">Motif de votre contact</label>
                <input type="text" id="subject" placeholder="Sujet de votre message" value={subject} onChange={event => setSubject(event.target.value)} />
            </div>
            <div>
                <label htmlFor="message">Votre message</label>
                <textarea id="message" placeholder="Votre message" value={message} onChange={event => setMessage(event.target.value)}></textarea>
            </div>
            <div>
                <button type="submit">Envoyer mon message</button>
            </div>
        </form>
    );
};

const Formulaire = () => {
    return (
        <>
            <ContactForm />
            <div className="contactez-nous">
                <h1>Contactez-nous ici.</h1>
            </div>
        </>
    );
};

export default Formulaire;
