import "./Card.css";

function Card({ hero, count }) {
  console.log(hero.name, hero.clicked);
  return (
    <div className="card" onClick={() => count(hero.id)}>
      <div className="img_container">
        <img src={hero.image} />
      </div>
      <p>
        <b>Name: </b>
        {hero.name}
      </p>
      <p>
        <b>Occupation: </b>
        {hero.occupation}
      </p>
    </div>
  );
}

export default Card;
