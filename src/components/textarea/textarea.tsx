import React from "react";
import classNames from "classnames";
import styles from "./textarea.module.scss"
import { changeEvent } from "../../kit/changeEvent"

type TextareaProps = {
    className?: string,
    placeholder: string,
    value: string,
    onChange: (changeEvent: changeEvent) => any,
    name?: string,
    focused?: boolean,
    disabled?: boolean,
    cols?: number,
    rows?: number,
    totalCharacters?: number
}

export default function TextareaInput({className, value, onChange, placeholder, cols, rows, disabled, totalCharacters = 1000}: TextareaProps){
    
    return <div className={classNames(styles.textarea, {[styles.warning]: value.split('').length > totalCharacters}, className)}>
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            cols={cols}
            rows={rows}
            maxLength = {totalCharacters+1}
            disabled={disabled}
        />  
        <div className = {classNames(styles.number, {[styles.numberWarning]: value.split('').length > totalCharacters})}>{value.split('').length}/{totalCharacters}</div>
    </div>
}