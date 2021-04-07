import React from "react";

type CrossProps = {
    color?: string
}

export default function Cross({color = "#ffffff"}: CrossProps){
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.887 16.05V9.78H0.584V6.678H6.887V0.473999H9.857V6.678H16.16V9.78H9.857V16.05H6.887Z" fill={color}/>
    </svg>
}