// COMPONENTS
import ProjectList from "../components/ProjectList";
import SubNavigation from "../components/SubNavigation";
import Pagination from "../components/Pagination";

const Project = () => {
  return (
    <div className="project-area">
      <div className="common-inner">
        <div className="title-area">
          <div className="title">Project</div>
          <div className="description">
            <span className="eng">HY-BLOCK</span>
            <span className="kr">의 프로젝트를 소개합니다!</span>
          </div>
        </div>
        <SubNavigation />
        <ProjectList />
        <Pagination />
      </div>
    </div>
  );
};

export default Project;
