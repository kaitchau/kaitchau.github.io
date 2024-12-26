import '../stylesheets/Home.css';
export default function Home() {
    return(
        <div id='home' className='home-container'>
            <picture className='home-background-image'>
                <source media='(max-width: 768px)' srcSet={`${process.env.PUBLIC_URL}/anhm-mobile.jpg`}></source>
                <source media='(min-width: 769px)' srcSet={`${process.env.PUBLIC_URL}/anhm.jpg`}></source>
                <img src={`${process.env.PUBLIC_URL}/anhm.jpg`} alt="Home Image" />
            </picture>
            <div className='home-content'>
                <div className='home-text'>
                    <h1>Hi! My name is Kaitlyn</h1>
                    <p>Recent Computer Science Graduate</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/grad-pic.png`} className='home-profile-pic' alt='Profile Pic'></img>
            </div>
        </div>
    );
}