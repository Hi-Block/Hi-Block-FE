import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = (props) => {

	useEffect(() => {
		AOS.init();
	  })

    return (
    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
		<div className="card-layout">
			<div className="card-layout-content">
				<div className="card-layout-content-name">
					<div className="card-layout-content-name-eng">{props.eng}</div>
					<div className="card-layout-content-name-kor">{props.kor}</div>
				</div>
				<div className="card-layout-content-contact">
					{props.department}
				</div>
				<div className="card-layout-content-description">
                    {props.description.split('\n').map(line => {
                        return (<span className="description-span">{line}<br/></span>)
                    })}
				</div>
				<div class="card-layout-content-social">
                    <a
                        class='social-icon-link email'
                        href={props.email}
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='email'
                    >
                    <i class="fa fa-envelope"/>
                    </a>
					<a
                        class='social-icon-link twitter'
                        href={props.twitter}
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Twitter'
                    >
					<i class='fab fa-twitter' />
                    </a>
					<a
                        class='social-icon-link github'
                        href={props.github}
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='GitHub'
                    >
                    <i class="fab fa-github"/>
                    </a>
					<a
                        class='social-icon-link linkedin'
                        href={props.linkedin}
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='LinkedIn'
                    >
                    <i class="fab fa-linkedin-in"/>
                    </a>
					<a
                        class='social-icon-link web'
                        href={props.blog}
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Web'
                    >
                    <i class="fas fa-globe"/>
                    </a>
				</div>
			</div>
		</div>
	</div> 
    );
};

export default Profile;