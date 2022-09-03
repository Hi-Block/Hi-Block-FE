// COMPONENTS
import { useState } from "react";
import ProjectList from "../components/ProjectList";
import SubNav from "../components/SubNav";

const Project = () => {

  const [active, setActive] = useState(1);

  const getActive = (state) => {
    const category = state; 
    setActive(category);
  }

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
        <SubNav getActive={getActive} />
        <ProjectList state={active}/>
      </div>
    </div>
  );
};

export default Project;
