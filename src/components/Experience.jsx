import React from 'react'
import useReveal from '../hooks/useReveal'
import './Experience.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiJquery, SiMongodb, SiPostgresql, SiNextdotjs, SiFirebase } from "react-icons/si"

export default function Experience() {
    const { ref, isVisible } = useReveal();

    const EXPERIENCE = [
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'jQuery', icon: <SiJquery />, color: '#0769AD' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
        { name: 'SQL', icon: <FaDatabase />, color: '#00758F' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    ]

    return (
        <section id="experience" className="experience">
            <h2 className="section-title">
                <span className="green">03.</span> Herramientas & Tecnologías
            </h2>

            <div 
                ref={ref}
                className={`experience-grid reveal ${isVisible ? 'active' : ''}`}
            >
                {EXPERIENCE.map((item, index) => (
                    <article 
                        key={index} 
                        className="experience-item"
                        style={{ '--hover-color': item.color }}
                    >
                        <span className="experience-icon">{item.icon}</span>
                        <span className="experience-name">{item.name}</span>
                    </article>
                ))}
            </div>

            <p className="experience-quote">
                “Cada tecnología que aprendo me permite crear soluciones más completas,
                eficientes y con un propósito claro.”
            </p>
        </section>
    )
}
