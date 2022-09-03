//COMPONENTS
import ProjectContributor from "./ProjectContributor";

const ProjectItem = ({ name, desc, contributor }) => {
    return (
        <div className="project-item">
            <img
                className="project-image" 
                src={process.env.PUBLIC_URL+'/images/Logo-480.png'}
                alt="projectlogo"
            />
            <div className="project-expr">
                <div className="project-name">{ name }</div>
                <div className="project-desc">{ desc }</div>
                <div className="project-contributor">
                    {contributor.map((it) => (
                        <ProjectContributor contributor={it}/>
                    ))}
                </div>
                <button className="btn-more">
                    <span>더 알아보기</span>
                    <img src={process.env.PUBLIC_URL+'/images/Arrow-More.png'} alt="arrow-more" />
                </button>
            </div>
        </div>
    );
}

export default ProjectItem;