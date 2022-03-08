import "./ProjectBoxDetail.css";

export default function ProjectBoxDetail({ project, setProjects, projects }) {
  const handleDetail = () => {
    let projectArr = projects;
    let index = projectArr.indexOf(project);
    projectArr[index].arr.status = !projectArr[index].arr.status;
    setProjects([...projectArr]);
  };
  var skillArr = project.arr.skills.split(",");
  return (
    <div className="project-box-detail-container">
      <div className="close-btn-container">
        <button className="close-btn" onClick={handleDetail}>
          Close
        </button>
      </div>
      <div className="project-box-details-grid animate__animated animate__fadeIn">
        <div className="project-box-detail-title">
          02. <span>Project Title</span>
        </div>
        <div className="project-box-detail-description">
          {project.arr["detailed_description"]}
        </div>
        <div className="project-box-detail-skills-grid">
          {skillArr.map((skill) => {
            return <div className="project-box-detail-skills">{skill}</div>;
          })}
        </div>
      </div>
      <a
        href={project.arr.url}
        target="_blank"
        className="project-box-detail-demo"
      >
        View Demo
      </a>
    </div>
  );
}
