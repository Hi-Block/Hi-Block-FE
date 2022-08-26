const SubGallery = (props) => {
  return (
    <div className="main-gallery">
      <div className="gallery-text">
        <span className="text-title">{props.title}</span>
        <span className="text-body">{props.body}</span>
      </div>
    </div>
  );
};

export default SubGallery;
