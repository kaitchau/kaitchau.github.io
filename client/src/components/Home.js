import '../stylesheets/Home.css';
export default function Home() {
    return(
        <div className='home-container'>
            <img src={`${process.env.PUBLIC_URL}/anhm.jpg`} className='home-background-image' alt="Home Image"></img>
            <div className='home-content'>
                <h1>Hi! My name is Kaitlyn</h1>
                <img src={`${process.env.PUBLIC_URL}/grad-pic.png`} className='home-profile-pic' alt='Profile Pic'></img>
            </div>
        </div>
    );
}