// Styles
import './formulaire.scss';

const ContactForm = () => {
    const contactForm = document.getElementById('form__contact')
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    console.log(contactForm, name, email, subject, message)

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
    
        fetch('http://localhost:3001/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => response.text())
          .then(data => {
            if (data === 'success') {
              console.log("email send");
              name.value = "";
              email.value = "";
              subject.value = "";
              message.value = "";
            } else {
              alert("Something went wrong");
            }
          });
    });
}

const Formulaire = () => {
    <ContactForm />
    return (
        <div className="contactez-nous">
            <h1>Contactez-nous ici.</h1>
        
            <form className="form__contact" id="form__contact">
                <div>
                    <label htmlFor="nom">Votre nom</label>
                    <input type="text" id="name" placeholder="Votre nom/prénom ici" />
                </div>
                <div>
                    <label htmlFor="email">Votre e-mail</label>
                    <input type="email" id="email" placeholder="Votreadresse@mail.com" />
                </div>
                <div>
                    <label htmlFor="email">Motif de votre contact</label>
                    <input type="text" id="subject" placeholder="Sujet de votre message" />
                </div>
                <div>
                    <label htmlFor="message">Votre message</label>
                    <textarea id="message" placeholder="Votre message"></textarea>
                </div>
                <div>
                    <button type="submit" value="Send Message">Envoyer mon message</button>
                </div>
            </form>
        </div>
    );
};

export default Formulaire;