import React from 'react';

function Pagination({ onClick}) {
    let url = window.location;
    let page = new URLSearchParams(url).values().next().value;
    return (
        <div>
            <button type="button" disabled={page <= 2}
                    onClick={() => onClick(()=> {
                        new URLSearchParams(url).set("page", "1")
                        return url;
                    })}> {"<<"} </button>

            <button type="button" disabled={page === 1}
                    onClick={() => onClick(()=> {
                        new URLSearchParams(url).set("page", "1")
                        return url;
                    })}>{"<"} </button>

            <p>{page}</p>

            <button type="button" disabled={page === 8}
                    onClick={() => onClick(()=> {
                        new URLSearchParams(url).set("page", "1")
                        return url;
                    })}>{">"} </button>

            <button type="button" disabled={page >= 7}
                    onClick={() => onClick(()=> {
                        new URLSearchParams(url).set("page", "8")
                        return url;
                    })}>{">>"} </button>
        </div>
    );
}
export default Pagination;
