import React, { useEffect,useState } from 'react';
import '../stylesheets/NavBar.css';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const homeHeight = homeSection.offsetHeight;
                setScrolled(window.scrollY > homeHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (event) => {
        const id = event.target.id;
        if(id !== 'home') {
            const section = document.getElementById(id);
            if(section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        }
        else {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    return(
        <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
            <p>
                <a href='#home' onClick={handleClick}>Home</a>
                <a href='#about' onClick={handleClick}>About</a>
                <a href='#projects' onClick={handleClick}>Projects</a>
                <a href='#contact' onClick={handleClick}>Contact</a>
            </p>
        </nav>
    );
}