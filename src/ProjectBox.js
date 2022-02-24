import './ProjectBox.css'
import portraitImage from './images/600x600.jpg'

export default function ProjectBox({ project, setProjects, projects }) {
    const handleDetail = () => {
        let projectArr = projects
        let index = projectArr.indexOf(project)
        projectArr[index].arr.status = !projectArr[index].arr.status
        setProjects([...projectArr])
    }
    console.log(project)
    var skillArr = project.arr.skills.split(',')
    return (
        <div className='project-box'>
            <div className='project-detail-box animate__animated animate__fadeIn'>
                <div className='project-image-container'>
                    <img className="project-images" src={project.arr.image.filename} alt="" />
                </div>
                <div className='project-detail-grid'>
                    <div className='project-detail-heading'><span className='project-detail-num'>01. </span>{project.arr.name}</div>
                    <div className='project-detail-skill-grid'>
                        {skillArr.map(skill => {
                            return <div className="project-detail-skills">{skill}</div>
                        })}
                    </div>
                    <div className="project-details">{project.arr.description}</div>
                </div>
            </div>
            <div className='project-view' onClick={handleDetail}> View details </div>
        </div>
        
    )
        
}
