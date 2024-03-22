import React from "react";
import PropTypes from "prop-types";

function Pagination({ pagination, setPage }) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setPage(pagination.first);
        }}
        disabled={pagination.first == null}
      >
        {pagination.first}
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(pagination.previous);
        }}
        disabled={pagination.previous == null}
      >
        {pagination.previous}
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(pagination.next);
        }}
        disabled={pagination.next == null}
      >
        {pagination.next}
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(pagination.last);
        }}
        disabled={pagination.last == null}
      >
        {pagination.last}
      </button>
    </>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object,
  setPage: PropTypes.func,
};
Pagination.defaultProps = {
  pagination: {},
  setPage: null,
};
export default Pagination;
