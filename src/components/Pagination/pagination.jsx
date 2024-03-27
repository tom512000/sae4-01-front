import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import "./pagination.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";

function Pagination({ onClick, maxPage }) {
  const url = new URL(window.location.href);
  const [page, setPage] = useState(1);

  function handleClick(newPage) {
    url.searchParams.set("page", newPage);
    onClick(url.toString());
    setPage(parseInt(new URLSearchParams(url.search).get("page"), 10));
  }

  return (
    <div className="pagination">
      <button
        type="button"
        aria-label="button"
        disabled={page <= 1}
        onClick={() => handleClick(1)}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <button
        type="button"
        aria-label="button"
        disabled={page <= 1}
        onClick={() => handleClick(page - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <p>Page précédente</p>
      </button>
      <p>{page}</p>
      <button
        type="button"
        aria-label="button"
        disabled={page >= maxPage}
        onClick={() => handleClick(page + 1)}
      >
        <p>Page précédente</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button
        type="button"
        aria-label="button"
        disabled={page >= maxPage}
        onClick={() => handleClick(maxPage)}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  maxPage: PropTypes.number.isRequired,
};

export default Pagination;
