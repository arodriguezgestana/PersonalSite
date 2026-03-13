import React from 'react'
import useReveal from '../hooks/useReveal'
import { ExternalLink } from 'lucide-react'
import './Projects.css'

export default function Projects() {
    const { ref, isVisible } = useReveal();

    const PROJECTS = [
        {
            name: "MIONE S.A.",
            description: "Landing page corporativa para Mione S.A., empresa líder en alimentos para mascotas. Desarrollada en conjunto con Agencia Bruta, cuenta con un diseño a medida, optimización SEO y un panel de gestión integrado.",
            image: "https://pub-4b1bdad496cd4d34be9a3c584d3de654.r2.dev/logo.webp",
            link: "https://mione.com.uy",
            tags: ["React", "Firebase"]
        },
        {
            name: 'Fithub',
            description: "Plataforma integral SaaS de gestión de socios para gimnasios y centros deportivos. Permite el control de cuotas, rutinas, perfiles de usuario y gestión administrativa completa.",
            image: "https://www.agusberois.dev/assets/logo-CMomad0j.png",
            link: "https://fithub.uy",
            tags: ["React", "Node.js", "PostgreSQL", "Firebase"]
        },
        {
            name: 'Pieza Clave',
            description: "Plataforma de herramientas psicoeducativas enfocada en el bienestar mental. Incluye recursos interactivos y un diseño calmado y accesible para todos los usuarios.",
            image: "https://www.piezaclave.uy/assets/logo-g79K7WoZ.jpg",
            link: "https://piezaclave.uy",
            tags: ["React", "Firebase"]
        },
        {
            name: 'Gimnasio Oxigenarte',
            description: 'Landing page para Gimnasio Oxigenarte.',
            image: 'https://oxigenarte.vercel.app/assets/logo-2EmJ37y_.jpg',
            link: 'https://oxigenarte.vercel.app',
            tags: ["ReactJS"]
        }

    ]

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">
                <span className="green">02.</span> Algunos Proyectos
            </h2>

            <div
                ref={ref}
                className={`projects-list reveal ${isVisible ? 'active' : ''}`}
            >
                {PROJECTS.map((project, index) => (
                    <article className="project-feature" key={index}>
                        <div className="project-content">
                            <p className="project-overline">Proyecto Destacado</p>
                            <h3 className="project-title">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            </h3>

                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <ul className="project-tech-list">
                                {project.tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>

                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Ver Proyecto Externo">
                                    <ExternalLink size={22} />
                                </a>
                            </div>
                        </div>

                        <div className="project-image">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="img-wrapper">
                                    <img
                                        src={project.image}
                                        alt={`Imagen del proyecto ${project.name}`}
                                        loading="lazy"
                                    />
                                </div>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
