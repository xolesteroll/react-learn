import React from 'react';
import classes from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.pageNumWrapper}>
            {pages.map(p => {
                return <span
                    key={p} className={p === props.currentPage ? classes.selectedPage : classes.pageNum}
                    onClick={() => {props.onPageChanged(p)}}>{p}
                </span>
            })}
        </div>
    );
};

export default Paginator;