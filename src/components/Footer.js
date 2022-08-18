import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="footer-content-logo" src={process.env.PUBLIC_URL+'/images/Logo-Square.png'} alt='logo' />
                </div>
                <div className="footer-content-textWrap">
                        <div class='name'><b>HY-BLOCK</b></div>
                        <div class='slogan'>High Dreams with Blockchain</div>
                    </div>
                <span className="footer-content-blank"/>
                <div className="footer-content-socialIcons">
                    <Link
                        class='social-icon-link github'
                        to='/'
                        target='_blank'
                        aria-label='GitHub'
                    >
                    <i class="fab fa-github"/>
                    </Link>
                    <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                        class='social-icon-link medium'
                        to='/'
                        target='_blank'
                        aria-label='Medium'
                    >
                    <i class='fab fa-medium' />
                    </Link>
                </div>
            </div>  
        </footer>
    );
};

export default Footer;