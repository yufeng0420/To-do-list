import React from "react";

type DotsProps = {
    color?: string
}

export default function Dots({color = "#36435F"}: DotsProps){
    return <svg width="12" height="12" viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="6" fill={color}/>
    </svg>
}