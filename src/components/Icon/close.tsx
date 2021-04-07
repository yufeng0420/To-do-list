import React from 'react';
import classNames from "classnames";

type CloseButtonProps = {
    className?: string,
    onClick: ()=>any
}

export default function CloseButton({className, onClick}: CloseButtonProps) {
    return <svg onClick={onClick} className={classNames(className)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15" stroke="#242755" strokeWidth="2" strokeLinecap="square"/>
        <path d="M5 5L15 15" stroke="#242755" strokeWidth="2" strokeLinecap="square"/>
    </svg>
}