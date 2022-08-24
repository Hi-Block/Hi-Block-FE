// Navigation Item mapping with Component 'HeaderNavItem'
import { Link } from 'react-router-dom';

// COMPONENT
import Button from "./Button";
import HeaderNavItem from './HeaderNavItem';

// UTILS
import { navItem } from '../utils/navItem';

const Header = () => {
    
    return (
        <header className="header-area">
            <div className="nav-area">
                <div className="nav-bar-left">
                    <div className='img-wrapper'>
                        <Link to={'/'} >
                            <img 
                                className="logo-square" 
                                src={process.env.PUBLIC_URL+'/images/Logo-Square.png'} 
                                alt="Logo" 
                            />
                        </Link>
                    </div>
                    <div className="nav-item-wrapper">
                        <div className="nav-item-set">
                            {navItem.map((it) => (
                                <HeaderNavItem 
                                    key={it.id}
                                    content={it.content}
                                    address={it.address}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="nav-bar-right">
                    {/* Metamask icon click => connect wallet */}
                    <img 
                        className="logo-square" 
                        src={process.env.PUBLIC_URL+'/images/Logo-metamask.png'} 
                        alt="Metamask" 
                    />
                    <Button />
                </div>
            </div>
        </header>
    );
};

export default Header;