import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'
import Logo from '../assets/logo.png'

export default function Header() {
    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    return (
        <header className="header">
            <img src={Logo} alt="Logo" className="logo" />

            {/* Botón hamburguesa */}
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menú">
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Overlay para cerrar al hacer click fuera */}
            {open && <div className="nav-overlay" onClick={closeMenu} />}

            <nav className={`nav ${open ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
                    <li><a href="#about" onClick={closeMenu}>Sobre Mí</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
                    <li className="contacto"><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
