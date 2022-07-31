import "../cards/Card.scss";

const Card = ({ data }) => {
  //   console.log(data);
  return (
    <div className="container">
      {data.map((item) => {
        const { id, title, image, desc } = item;
        return (
          <div className="card-container" key={id}>
            <div className="title">
              <h1>{title}</h1>
            </div>
            <img src={image} alt="img" />
            <div className="card-over">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
