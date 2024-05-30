import "./card-shimmer.css";

const CardShimmer = () => {
  const userInfo = Array.from({ length: 10 }, (_, i) => i);

  console.log(userInfo);

  return (
    <div className="cards-container">
      {userInfo.map((id) => (
        <div className="card-container" key={id}>
          <div className="gradient">
            <div className="shimmer"></div>
          </div>
          <div className="dp"></div>
        </div>
      ))}
    </div>
  );
};

export default CardShimmer;
