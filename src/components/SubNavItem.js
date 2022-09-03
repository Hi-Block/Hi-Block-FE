const SubNavItem = ({ content, isActive, onClick }) => {

    return (
        <div 
            onClick={onClick}
            className={[isActive ? "sub-nav-item is-active" : "sub-nav-item"]}
        >
            {content}
        </div>
    );

}

export default SubNavItem;