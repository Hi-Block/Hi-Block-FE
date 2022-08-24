const SmallLinkBtn = (props) => {
  return (
    <div className="link-btn">
      <span className="link-text">{props.text}</span>
      <img
        className="link-image"
        src={process.env.PUBLIC_URL + "/images/Small-Poly.png"}
        alt="poly"
      ></img>
    </div>
  );
};

export default SmallLinkBtn;
