function Card(props) {
  const { name, img, handleClick, id } = props;
  const path = "/images/characters/";
  const src = path + img;
  return (
    <img
      src={src}
      alt={name + "Image"}
      className="card"
      onClick={() => {
        handleClick(id);
      }}
    />
  );
}

export default Card;
