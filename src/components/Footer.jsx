import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://github.com/agusberois" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/agustin-rodriguez-berois/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/agusberoisdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://wa.me/59891920278" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
                <div className="footer-info">
                    <a href="https://github.com/agusberois/PersonalSite" target="_blank" rel="noopener noreferrer">
                        <p>Diseñado y desarrollado por Agustín Berois</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}
