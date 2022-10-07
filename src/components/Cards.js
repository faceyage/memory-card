import Card from "./Card";

function Cards(props) {
  const { handleClick, cards } = props;
  return (
    <div className="cards">
      {cards.map((card) => {
        const { name, img, id } = card;
        const card_props = {
          key: id,
          name,
          img,
          handleClick,
          id,
        };
        return <Card {...card_props} />;
      })}
    </div>
  );
}

export default Cards;
