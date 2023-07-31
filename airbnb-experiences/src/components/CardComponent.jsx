 export default function CardComponent(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img} className="card-image" />
        <div className="card-info">
          <img src="star.png" className="star-pic" />
          <span>5.0</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><spam className="price-1">From ${props.price}</spam> / person</p>
      </div>
    </div>
  );
}
