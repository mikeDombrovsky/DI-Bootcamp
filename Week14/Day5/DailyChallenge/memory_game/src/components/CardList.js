import Card from "./Card";
import './CardList.css'
function CardList({ heroes, count }) {
  return (
    <div className="heroes">
      {heroes.map((hero) => {
        return <Card hero={hero} count={count} />;
      })}
    </div>
  );
}

export default CardList;
