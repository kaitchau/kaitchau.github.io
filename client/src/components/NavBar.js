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

    return(
        <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
            <p>
                <a href='#'>Home</a>
                <a href='#about'>About</a>
                <a href='#'>Contact</a>
            </p>
        </nav>
    );
}