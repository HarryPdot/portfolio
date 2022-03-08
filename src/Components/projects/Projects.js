import './Projects.css'
import Project from './ProjectJson'
import ProjectBox from './ProjectBox'
import ProjectBoxDetail from './ProjectBoxDetail'
import { useState, useEffect } from 'react'
import 'animate.css';

export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        Project().then(res => setProjects(res))
    }, [])

    return (
        <div id='project' className='projects-container'>
            <div className="project-container-2">
                <div className='project-heading'>Projects</div>
                <div className='project-list'>
                    {projects.map((project, i) => {
                        return (
                        <div className='flip-card' key={i}>
                            {project.arr.status && <ProjectBox project={project} setProjects={setProjects} projects={projects}/>}
                            {!project.arr.status && <ProjectBoxDetail project={project} setProjects={setProjects} projects={projects}/>}
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}