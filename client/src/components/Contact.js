import '../stylesheets/Contact.css';

export default function Contact() {
    return (
        <div id='contact' className='contact-container'>
            <div className='contact-content'>
                <h1>Contact</h1>
                <span>Email: <a href='mailto:kaitlyn.m.chau@gmail.com'>kaitlyn.m.chau@gmail.com</a></span>
                <span>LinkedIn: <a href='https://www.linkedin.com/in/kaitlyn-m-chau/'>https://www.linkedin.com/in/kaitlyn-m-chau/</a></span>
                <span>GitHub: <a href='https://github.com/kaitchau'>https://github.com/kaitchau</a></span>
            </div>
        </div>
    );
}