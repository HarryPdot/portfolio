import './ProjectBoxDetail.css'

export default function ProjectBoxDetail({ project, setProjects, projects }) {

    const handleDetail = () => {
        let projectArr = projects
        let index = projectArr.indexOf(project)
        projectArr[index].arr.status = !projectArr[index].arr.status
        setProjects([...projectArr])
    }

    return (
        <div className='project-box-detail-container'>
            <div className="close-btn-container">
                <button className="close-btn" onClick={handleDetail}>Close</button>
            </div>
            <div className='project-box-details-grid animate__animated animate__fadeIn'>
                <div className='project-box-detail-title'>02. Project Title</div>
                <div className='project-box-detail-description'> My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly.My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly.My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly.</div>
                <div className='project-box-detail-skills-grid'>
                    <div className='project-box-detail-skills'>yes</div>
                </div>
            </div>
            <a href={project.arr.url} target="_blank" className='project-box-detail-demo'>View Demo</a>
        </div>
    )
}