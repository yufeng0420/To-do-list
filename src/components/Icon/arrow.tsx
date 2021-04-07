import React from "react";

type ArrowProps = {
    fillColor?: string,
    onClickHandler?:()=>void
}

export function DownArrow({fillColor="#36435F", onClickHandler}: ArrowProps){
    return <svg onClick={onClickHandler} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M11 1L6 6L1 1" stroke={fillColor} strokeWidth="2" strokeLinecap="round"/>
    </svg>
} 