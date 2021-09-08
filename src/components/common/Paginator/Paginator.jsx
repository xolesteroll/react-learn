import React, {useState} from 'react';
import classes from "./Paginator.module.css";

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const currentPage = props.currentPage
    const currentPortionNumber = Math.ceil(currentPage / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(currentPortionNumber)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const leftPortionNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionNumber = portionNumber * props.portionSize

    const changePortion = (num, sign) => {
        let computedPortion
        if (sign === "plus") {
            computedPortion = num + 1
            setPortionNumber(computedPortion)
            props.onPageChanged(leftPortionNumber + props.portionSize)
            return
        }
        computedPortion = num -1
        setPortionNumber(computedPortion)
        props.onPageChanged(leftPortionNumber - props.portionSize)
        return
    }

    return (
        <div className={classes.pageNumWrapper}>
            {portionNumber > 1 && <button className={`${classes.pageNumNavBtn} prev`} onClick={() => {
                changePortion(portionNumber, "minus")
            }}>Prev
            </button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span
                        key={p}
                        className={p === props.currentPage ? classes.selectedPage : classes.pageNum}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}
                </span>
                })}
            {portionNumber < portionCount && <button className={`${classes.pageNumNavBtn} next`} onClick={() => {
                changePortion(portionNumber, "plus")
            }}>Next
            </button>}
        </div>
    );
};


export default Paginator;