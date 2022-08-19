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
                        <Profile/>
                        <Profile/>
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile/>
                        <Profile/>
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile/>
                        <Profile/>
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile/>
                        <Profile/>
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile/>
                        <Profile/>
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile/>
                        <Profile/>
                    </ul>
                    <ul className="Member-container-wrapper-items">
                        <Profile/>
                        <Profile/>
                    </ul>
                </div> 
            </div>
        </div>
    </>
    );
};

export default Member;
