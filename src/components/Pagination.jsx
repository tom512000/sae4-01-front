import React from "react";
import PropTypes from "prop-types";

function Pagination({ pagination, setPage, ...props }) {
  return (
    <>
      <button
        onClick={() => {
          setPage(pagination.first);
        }}
        disabled={pagination.first == null}
      >
        {pagination.first}
      </button>
      <button
        onClick={() => {
          setPage(pagination.previous);
        }}
        disabled={pagination.previous == null}
      >
        {pagination.previous}
      </button>
      <button
        onClick={() => {
          setPage(pagination.next);
        }}
        disabled={pagination.next == null}
      >
        {pagination.next}
      </button>
      <button
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

Pagination.PropTypes = {
  pagination: PropTypes.object,
  setPage: PropTypes.func,
};
export default Pagination;
