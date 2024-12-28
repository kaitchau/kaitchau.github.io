import '../stylesheets/Contact.css';

export default function Contact() {
    return (
        <div id='contact' className='contact-container'>
            <div className='contact-content'>
                <h1>Contact</h1>
                <span>Email:&nbsp;<a href='mailto:kaitlyn.m.chau@gmail.com'>kaitlyn.m.chau@gmail.com</a> </span>
                <span>LinkedIn:&nbsp;
                    <img src={`${process.env.PUBLIC_URL}/linkedin-logo.png`} />
                    &nbsp;
                    <a href='https://www.linkedin.com/in/kaitlyn-m-chau/'>https://www.linkedin.com/in/kaitlyn-m-chau/</a>
                </span>
                <span>GitHub:&nbsp;
                    <img src={`${process.env.PUBLIC_URL}/github-logo.png`} />
                    &nbsp;
                    <a href='https://github.com/kaitchau'>https://github.com/kaitchau</a>
                </span>
            </div>
        </div>
    );
}