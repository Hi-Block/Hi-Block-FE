const BigLinkBtn = (props) => {
  return (
    <div className="big-link-btn">
      <span className="big-link-text">{props.text}</span>
      <img
        className="big-link-image"
        src={process.env.PUBLIC_URL + "/images/Big-Poly.png"}
        alt="poly"
      ></img>
    </div>
  );
};

export default BigLinkBtn;
