import { useState } from "react";

function CardList({ heroes }) {
  return (
    <div className="heroes">
      {
      heroes.map(hero => {
        return <Card hero={hero}/>
      })}
    </div>
  );
}

export default CardList;
