import React, {useState} from 'react';
import styles from "./select.module.scss"
import classNames from "classnames";
import {DownArrow} from "../Icon/arrow"

type selectProps = {
    className?: string,
    handleChange: (a: any) => any,
    options: any[],
    value: string | number,
}

export default function Select({className, handleChange, options, value}: selectProps){
    const [showDropDown, setShowDropDown] = useState(false);
   
    return (
        <div className={classNames(styles.Select, className)}>
            {/* {showHeader && <div className= {styles.optionHeader}>{optionTitle}</div>} */}

            <div
                className={classNames(styles.arrowContainer)}
                onClick={() => {setShowDropDown(!showDropDown)}}
            >
                {value}
                <DownArrow />
            </div>
            {showDropDown &&
            <div className={classNames(styles.dropDownMenu)}>
                {options?.map(o => (
                    <div
                        key={o}
                        className={styles.dropDownItems}
                        onClick={() => {
                            handleChange(o)
                            setShowDropDown(false)
                        }}
                    >
                        {o}
                    </div>
                ))}
            </div>}
        </div>
    );
}
