function Card(props) {
  const { name, img, handleClick, id } = props;

  return (
    <img
      src={img}
      alt={name + "Image"}
      className="card"
      onClick={() => {
        handleClick(id);
      }}
    />
  );
}

export default Card;
