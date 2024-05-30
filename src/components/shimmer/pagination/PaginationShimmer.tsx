import "./pagination-shimmer.css";

const PaginationShimmer = () => {
  const navigatePage = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="pagination-shimmer-container">
      {navigatePage.map((num) => (
        <button key={num} className="pagination-shimmer-btn">
          <div className="shimmer"></div>
        </button>
      ))}
    </div>
  );
};

export default PaginationShimmer;
