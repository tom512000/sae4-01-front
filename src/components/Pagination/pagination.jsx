import { useState } from "react";
import {
  faAnglesLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./pagination.css";

function Pagination({ onClick, dataLength }) {
  const url = new URL(window.location.href);
  const [page, setPage] = useState(1);

  function handleClick(newPage) {
    url.searchParams.set("page", newPage);
    onClick(url.toString());
    setPage(parseInt(new URLSearchParams(url.search).get("page"), 10));
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="pagination">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <button
        type="button"
        aria-label="button"
        disabled={page <= 1}
        onClick={() => handleClick(1)}
      >
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <button
        type="button"
        aria-label="button"
        disabled={page <= 1}
        onClick={() => handleClick(page - 1)}
      >
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <FontAwesomeIcon icon={faChevronLeft} />
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <p>Page précédente</p>
      </button>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <p>{page}</p>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <button
        type="button"
        aria-label="button"
        disabled={dataLength < 15}
        onClick={() => handleClick(page + 1)}
      >
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <p>Page suivante</p>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataLength: PropTypes.number.isRequired,
};

export default Pagination;
