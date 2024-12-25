import '../stylesheets/Home.css';
export default function Home() {
    return(
        <div id='home' className='home-container'>
            <img src={`${process.env.PUBLIC_URL}/anhm.jpg`} className='home-background-image' alt="Home Image"></img>
            <div className='home-content'>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h1>Hi! My name is Kaitlyn</h1>
                    <p>Recent Computer Science Graduate</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/grad-pic.png`} className='home-profile-pic' alt='Profile Pic'></img>
            </div>
        </div>
    );
}