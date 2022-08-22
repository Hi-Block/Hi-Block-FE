import MainGallery from "./MainGallery";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="left-content-area"> dafasd </div>
      <div className="right-content-area">
        <MainGallery
          img="https://picsum.photos/600/700"
          title="자율 프로젝트"
          body="eerwere~~~"
        />
      </div>
    </div>
  );
};

export default MainContent;
