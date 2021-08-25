import React from "react"
import classes from "./Forms.module.css"
import {Field} from "redux-form";


const formControl = Element => ({ input, meta: {touched, error}, ...props }) => {
    return (
        <div className={`${classes.formWrapper} ${touched && error ? classes.error : ""}`}>
            <div className={classes.formInner}>
                <Element {...input} {...props}/>
                {touched && error && <span className={classes.formWarning}>{error}</span>}
            </div>
        </div>
    );
};

export const Textarea = formControl('textarea')


export const Input = formControl('input')

export const createField = (type, name, component, validators, fieldClass,  wrapperClass, label, placeholder) => {
    return (
        <div className={wrapperClass}>
            {label && <label htmlFor={name}>{label}</label>}
            <Field type={type} name={name} component={component} className={fieldClass ? fieldClass : ""}
                   validate={validators} placeholder={placeholder ? placeholder : ""}/>
        </div>)
}