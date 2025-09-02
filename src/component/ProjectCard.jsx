
import './ProjectCard.css'

function ProjectCard({ imgSrc, title, description, demoLink, codeLink }) {
  return (
    <div className="project-card">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="project-buttons">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Ir a la pag</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Código Fuente</a>
      </div>
    </div>
  )
}

export default ProjectCard
