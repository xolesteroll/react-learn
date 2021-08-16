import React from "react"
import classes from "./Forms.module.css"


const formControl = Element => ({ input, meta, ...props }) => {
    return (
        <div className={`${classes.formWrapper} ${meta.touched && meta.error ? classes.error : ""}`}>
            <div className={classes.formInner}>
                <Element {...input} {...props}/>
                <span className={classes.formWarning}>{meta.error}</span>
            </div>
        </div>
    );
};

export const Textarea = formControl('textarea')


export const Input = formControl('input')