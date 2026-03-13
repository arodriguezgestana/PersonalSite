import React from 'react'
import ProfileImage from '../assets/logo.png'
import useReveal from '../hooks/useReveal'
import './AboutMe.css'

export default function AboutMe() {
    const { ref, isVisible } = useReveal();

    return (
        <section className="aboutMe" id="about">
            <h2 className="section-title">
                <span className="green">01.</span> Sobre mí
            </h2>
            
            <div 
                ref={ref} 
                className={`about-content reveal ${isVisible ? 'active' : ''}`}
            >
                <div className="about-text">
                    <p>
                        Hola! Soy <span className="green">Agustín Berois</span>, un desarrollador
                        <span className="green"> FullStack</span> apasionado por crear soluciones
                        tecnológicas eficientes, escalables y visualmente atractivas. Mi interés 
                        en el desarrollo web comenzó cuando decidí construir mi primera página 
                        para un proyecto personal.
                    </p>

                    <p>
                        Hoy en día, me especializo en el desarrollo de aplicaciones web modernas de principio a fin.
                        He tenido el privilegio de construir software robusto usando tecnologías como 
                        <span className="green"> React, Next.js y Node.js</span>, y arquitecturas de bases de 
                        datos tanto relacionales (<span className="green"> PostgreSQL</span>) como 
                        no relacionales (<span className="green"> MongoDB</span>).
                    </p>
                </div>

                <div className="about-image-wrapper">
                    <div className="about-image">
                        <img src={ProfileImage} alt="Foto de perfil de Agus Berois" />
                    </div>
                </div>
            </div>
        </section>
    )
}
