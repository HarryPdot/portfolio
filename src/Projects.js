
import './Projects.css'

export default function Projects() {

    const ProjectBox = (props) => {
        return (
            <div className='project-box'>
                <div className='project-detail-box'>
                    <div className='project-detail-grid'>
                        <div className='project-detail-heading'><span className='project-detail-num'>01. </span>{props.heading}</div>
                        <div className='project-detail-skill-grid'>
                            {props.skills.map(skill => {
                                return <div className="project-detail-skills">{skill}</div>
                            })}
                        </div>
                        <div className="project-details">My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly.</div>
                    </div>
                </div>
                <div className='project-view'> View details </div>
            </div>
        )
    }

    return (
        <div className='projects-container'>
            <div className='project-heading'>Projects</div>
            <div className='project-list'>
                <ProjectBox skills={['Javascript']} heading={'Tic Tac Toe'}/>
                <ProjectBox skills={['Ruby', 'erb', 'psql']} heading={'MacBro'}/>
            </div>
        </div>
    )
}