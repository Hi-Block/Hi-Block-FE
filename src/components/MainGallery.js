const MainGallery = (props) => {
  return (
    <div className="main-gallery">
      <div className="gallery-image-area">
        <img className="main-image" src={props.img} alt="hi" />
      </div>
      <div className="gallery-text">
        <span className="text-title">{props.title}</span>
        <span className="text-body">{props.body}</span>
      </div>
    </div>
  );
};

export default MainGallery;
