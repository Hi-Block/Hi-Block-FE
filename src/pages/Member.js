import Profile from "../components/Profile";


const Member = () => {



    return (
    <>
        <div className="Member">
            <div className="Member-title">
                <h1 className="Member-title-main">Member</h1>
                <h3 className="Member-title-sub">HY-BLOCK의 구성원들을 소개합니다</h3>
            </div>
            <div className="Member-subNavigation">
                <div className="Member-subNavigation-wrap1">
                    <button className="wrap1-current">Current</button>
                </div>
                <div className="Member-subNavigation-wrap2">
                    <button className="wrap2-alumni">Alumni</button>
                </div>
            </div>
            <div className="Member-container">
                <div className="Member-container-wrapper">
                    <ul className="Member-container-wrapper-items">
                        <Profile
                            eng="Kevin"
                            kor="홍성택"
                            department="1기 DEVELOPMENT TEAM"
                            description="CSE 18  |  Front End Developer
                            React.js, Flutter, Solidity"
                            email="mailto:hyblock@gmail.com"
                            twitter='https://twitter.com'
                            github='https://github.com'
                            linkedin='https://www.linkedin.com'
                            blog='https://www.naver.com'
                        />
                        <Profile
                            eng="Kevin"
                            kor="홍성택"
                            department="1기 DEVELOPMENT TEAM"
                            description="CSE 18  |  Front End Developer\nReact.js, Flutter, Solidity"
                            email="mailto:hyblock@gmail.com"
                            twitter='https://twitter.com'
                            github='https://github.com'
                            linkedin='https://linkedin.com'
                            blog='https://naver.com'
                        />
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile
                            eng="Kevin"
                            kor="홍성택"
                            department="1기 DEVELOPMENT TEAM"
                            description='CSE 18  |  Front End Developer\nReact.js, Flutter, Solidity'
                            email="mailto:hyblock@gmail.com"
                            twitter='https://twitter.com'
                            github='https://github.com'
                            linkedin='https://linkedin.com'
                            blog='https://naver.com'
                        />
                    </ul>
                </div> 
            </div>
        </div>
    </>
    );
};

export default Member;
