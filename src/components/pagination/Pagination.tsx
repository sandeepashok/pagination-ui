import React, { useState } from "react";
import "./pagination.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface PaginationProps {
  page: number;
  setPage: Function;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const [navigatePage, setNavigatePage] = useState(
    Array.from({ length: 5 }, (_, i) => i + 1)
  );

  const handlePageClick = (num: number) => setPage(num);

  const handlePrev = () => {
    if (page >= 2) {
      setNavigatePage((pageNumbers) => {
        if (pageNumbers[0] > 1) {
          return pageNumbers.map((num) => num - 1);
        } else {
          return pageNumbers;
        }
      });
      setPage((page: number) => page - 1);
    }
  };

  const handleNext = () => {
    if (page <= 19999) {
      setNavigatePage((pageNumbers) => pageNumbers.map((num) => num + 1));
      setPage((page: number) => page + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        disabled={page <= 1}
        onClick={handlePrev}
      >
        <FaAngleDoubleLeft />
      </button>
      {navigatePage.map((num) => (
        <button
          key={num}
          onClick={() => handlePageClick(num)}
          className={page === num ? "pagination-btn active" : "pagination-btn"}
        >
          {num}
        </button>
      ))}
      <button
        className="pagination-btn"
        disabled={page >= 19999}
        onClick={handleNext}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Pagination;
