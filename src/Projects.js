import './Projects.css'

export default function Projects() {

    const ProjectBox = () => {
        return (
            <div className='project-box'>

            </div>
        )
    }

    return (
        <div className='projects-container'>
            <div>Projects</div>
            <div className='project-list'>
                <ProjectBox/>
            </div>
        </div>
    )
}