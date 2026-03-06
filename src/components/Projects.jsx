import React from 'react'
import './Projects.css'

export default function Projects() {
    const PROJECTS = [
        {
            name: "MIONE S.A.",
            description: "Landing page para Mione S.A., empresa de alimentos para mascotas. ",
            image: "https://pub-4b1bdad496cd4d34be9a3c584d3de654.r2.dev/logo.webp",
            link: "https://mi-one-six.vercel.app/"
        },
        {
            name: 'Fithub',
            description: "Plataforma de gestión de socios para centros deportivos.",
            image: "",
            link: "https://fithub.uy"
        },
        {
            name: 'Pieza Clave',
            description: "Plataforma de herramientas psicoeducativas.",
            image: "https://www.piezaclave.uy/assets/logo-g79K7WoZ.jpg",
            link: "https://piezaclave.uy"
        }
    ]

    return (
        <section className="projects" id="projects">
            <header className="projects-header">
                <h2 className="green">Proyectos</h2>
                <p>Algunos de mis proyectos más destacados</p>
            </header>

            <div className="projects-grid">
                {PROJECTS.map((project, index) => (
                    <article className="project-card" key={index}>
                        <img
                            src={project.image}
                            alt={`Proyecto ${project.name}`}
                            loading="lazy"
                        />

                        <h3>{project.name}</h3>
                        <p>{project.description}</p>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver proyecto
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}
