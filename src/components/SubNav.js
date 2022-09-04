// REACT
import { useEffect, useState } from "react";

// COMPONENTS
import SubNavItem from "./SubNavItem";

//UTILS
import { subNavItem } from "../utils/subNavItem";

const SubNav = ({ getActive }) => {
    
    const [active, setActive] = useState(1);

    const toggleEvent = (e) => {
        for(let i=0; i< subNavItem.length; i++) {
            if(e.target.innerHTML === subNavItem[i].content) {
                setActive(subNavItem[i].id);
                break;
            } 
        }
    }

    useEffect(() => {
        getActive(active);
    }, [active]);

    return (
        <div className="sub-nav-area">
            {subNavItem.map((it) => (
                <SubNavItem
                    key = {it.id} 
                    content = {it.content}
                    isActive = {it.id === active}
                    onClick={toggleEvent} 
                />
            ))}
        </div>
    );
};

export default SubNav;