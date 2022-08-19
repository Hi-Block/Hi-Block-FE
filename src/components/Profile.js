import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {

	useEffect(() => {
		AOS.init();
	  })

    return (
    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
		<div className="card-layout">
			<div className="card-layout-content">
				<div className="card-layout-content-name">
					<div className="card-layout-content-name-eng">Kevin</div>
					<div className="card-layout-content-name-kor">홍성택</div>
				</div>
				<div className="card-layout-content-contact">
					1기 Development Team
				</div>
				<div className="card-layout-content-description">
					CSE 18  |  Front End Developer<br/>
					React.js, Flutter, Solidity
				</div>
				<div class="card-layout-content-social">
					<Link
                        class='social-icon-link email'
                        to='/'
                        target='_blank'
                        aria-label='email'
                    >
                    <i class="fa fa-envelope"/>
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
                        class='social-icon-link github'
                        to='/'
                        target='_blank'
                        aria-label='GitHub'
                    >
                    <i class="fab fa-github"/>
                    </Link>
					<Link
                        class='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                    <i class="fab fa-linkedin-in"/>
                    </Link>
					<Link
                        class='social-icon-link web'
                        to='/'
                        target='_blank'
                        aria-label='Web'
                    >
                    <i class="fas fa-globe"/>
                    </Link>
				</div>
			</div>
		</div>
	</div> 
    );
};

export default Profile;