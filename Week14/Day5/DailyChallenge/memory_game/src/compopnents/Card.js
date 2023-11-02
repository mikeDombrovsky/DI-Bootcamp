function Card({ id, name, image, occupation }) {
  return (
    <div className="card" onClick={() => count(id)}>
      <img src={image} />
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Occupation: </b>
        {occupation}
      </p>
    </div>
  );
}

export default Card;
