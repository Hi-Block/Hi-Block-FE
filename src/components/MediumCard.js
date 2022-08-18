import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <li className="cards-item">
        <Link className="item-link" to={props.path}>
          <div className="link-card">
            <img className="card-image" src={props.img} />
            <div className="card-body">
              <h2 className="body-title">{props.title}</h2>
              <h5 className="body__authorDate">{props.author}  ·  {props.date}</h5>
          </div>
        </div>
        </Link>
      </li>
    </>
  );
}

export default Card;