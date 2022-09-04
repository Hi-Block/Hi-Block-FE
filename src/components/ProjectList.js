// COMPONENTS
import ProjectItem from "./ProjectItem";

// UTILS
import { projectItem } from "../utils/projectItem";

const ProjectList = ({ state }) => {
    let sortedProjectItem = [];

    if(state === 1) {
        sortedProjectItem = projectItem.filter((it) => it.category === 'research');
    } else {
        sortedProjectItem = projectItem.filter((it) => it.category === 'develop');
    }

    return (
        <div className="project-list-area">
            {sortedProjectItem.map((it) => (
                <ProjectItem
                    key={it.id}
                    name={it.name}
                    desc={it.description}
                    contributor={it.contributor}
                />
            ))}
        </div>
    );
}

export default ProjectList;