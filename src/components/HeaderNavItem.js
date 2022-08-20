// Header Navigation Menu Items 

import { useNavigate } from "react-router-dom";

const HeaderNavItem = ({ content, address }) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`${address}`);
        console.log(`localhost:3000/${address}`);
    }

    return (
        <button 
            onClick={onClickHandler} 
            className="nav-item"
        >
            { content }
        </button>
    );
}

export default HeaderNavItem;