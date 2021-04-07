import React,{ReactElement} from 'react';
import styles from "./button.module.scss"
import classNames from 'classnames';

export type ButtonProps = {
    className?: string,
    text: any,
    theme: "solid" | "hollow",
    setWidth: number, // negative means percentage
    setHeight: number, 
    onClick: ()=>any,
    disabled?: boolean,
}

export default function Button(
    {
        className,
        text,
        theme,
        setWidth,
        setHeight,
        onClick,
        disabled= false,
    }: ButtonProps): ReactElement{

    // convert width to the correct unit
    let cssWidth = setWidth + "px";
    if (setWidth < 0 && setWidth >= -100) {
        cssWidth = setWidth * -1 + "%";
    }

    let buttonDimensions = {
        width: cssWidth,
        height: '' + setHeight + 'px',
        lineHeight: '' + (setHeight-1) + 'px' // vertically center text
    };

    return(
        <div
            className={classNames(
                styles.solid,
                theme === "solid" ? styles.solid : styles.hollow,
                className,
                {disabled}
            )}
            onClick={()=>{
                if (!disabled) {
                    onClick()
                }
            }}
            style={buttonDimensions}
            data-test="buttonComponent"
        >
            {text}
        </div>
    )
}
