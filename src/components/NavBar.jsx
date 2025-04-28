import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled); // set state to true or false based on scroll position
        }

        window.addEventListener('scroll', handleScroll, { passive: true }); // add event listener with passive true for performance

        // Cleanup on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);  // Empty dependency array ensures it runs once when component mounts

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Sahil | Shinde
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        Contact me
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
