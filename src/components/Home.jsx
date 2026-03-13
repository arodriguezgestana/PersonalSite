import React from 'react'
import useReveal from '../hooks/useReveal'
import './Home.css'

export default function Home() {
    const { ref, isVisible } = useReveal();

    return (
        <section id="home" className="home">
            <div 
                ref={ref} 
                className={`home-content reveal ${isVisible ? 'active' : ''}`}
            >
                <p className="green intro">Hola, mi nombre es</p>

                <h1 className="title">Agus Berois.</h1>
                <h2 className="subtitle">Construyo cosas para la web.</h2>

                <p className="description">
                    Soy un desarrollador <span className="green">FullStack</span> especializado en 
                    construir experiencias digitales excepcionales. Actualmente, estoy enfocado 
                    en desarrollar productos accesibles y centrados en el usuario.
                </p>

                <div className="home-actions">
                    <a href="#projects" className="btn-primary">Ver mis proyectos</a>
                    <a href="#contact" className="btn-secondary">Contáctame</a>
                </div>
            </div>
        </section>
    )
}
