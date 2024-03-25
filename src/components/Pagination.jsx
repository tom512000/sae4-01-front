import React, {useState} from 'react';

function Pagination({ onClick }) {
    const url = new URL(window.location.href);
    const [page, setPage] = useState(1);

    function handleClick (newPage) {
        url.searchParams.set('page', newPage);
        onClick(url.toString());
        setPage(parseInt(new URLSearchParams(url.search).get('page')));
    }

    return (
        <div>
            <button type="button" disabled={page <= 1}
                    onClick={() =>
                        handleClick(1)}>
                {"<<"}
            </button>
            <button type="button" disabled={page <= 1}
                    onClick={() =>
                        handleClick(page - 1)}>
                {"<"}
            </button>
            <p>{page}</p>
            <button type="button" disabled={page >= 8}
                    onClick={() =>
                        handleClick(page + 1)}>
                {">"}
            </button>
            <button type="button" disabled={page >= 8}
                    onClick={() =>
                        handleClick(8)}> {">>"}
            </button>
        </div>
    );
}
export default Pagination;
