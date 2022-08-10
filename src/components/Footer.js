import React from "react";
import logo from '../images/hyblock-logo.PNG';
import classes from "./Footer.module.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <div className={classes.footer__content}>
                <img className={classes.footer__content__logo} src={logo} alt='' />
                <div className={classes.footer__content__textWrap}>
                    <div class='name'><b>HY-BLOCK</b></div>
                    <div class='slogan'>High Dreams with Blockchain</div>
                </div>
                <div className={classes.footer__content__socialIcons}>
                    <Link
                        class='social-icon-link github'
                        to='/'
                        target='_blank'
                        aria-label='GitHub'
                    >
                    <i class="fab fa-github" />
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