import { Link } from 'react-router-dom';
import Button from "./Button";

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
                        <ul className="nav-item-set">
                            <li className='nav-item'><Link to={'/'}>Main</Link></li>
                            <li className='nav-item'><Link to={'/article'}>Article</Link></li>
                            <li className='nav-item'><Link to={'/project'}>Project</Link></li>
                            <li className='nav-item'><Link to={'/member'}>Member</Link></li>
                            {/* Recruit click => mainpage 하단으로 이동 설정 작업 필요 */}
                            <li className='nav-item'>Recruit</li>
                        </ul>
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