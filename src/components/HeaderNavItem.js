// Header Navigation Menu Items 
import { useNavigate } from "react-router-dom";

const HeaderNavItem = ({ content, address, isActive }) => {
    const navigate = useNavigate();
    
    const onClickHandler = () => {
        navigate(`${address}`);
    };

    return (
        <button 
            className={[isActive ? 'nav-item is-active' : 'nav-item not-active']}
            onClick={onClickHandler}
        >
            { content }
        </button>
    );
}

export default HeaderNavItem;