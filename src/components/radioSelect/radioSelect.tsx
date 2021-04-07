import React from "react";
import classNames from "classnames";
import styles from  "./radioSelect.module.scss";


type RadioSelectProps = {
    options: string[],
    value: string | null, 
    onChange:(a: any) => any,
    className?: string
}

export default function RadioSelect({options, value, onChange, className}:RadioSelectProps ){
    
    return  (
        <div className={classNames(styles.radioSelect, className)}>
            {options.map(option=> {
                let isSelected = option === value;
                return (
                    <div 
                        className={classNames(styles.borderBox, {[styles.showBorder]: isSelected })} 
                        onClick = {()=>{onChange(option)}}
                    >
                        <div key = {option} className={styles.text}>
                            {option}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}