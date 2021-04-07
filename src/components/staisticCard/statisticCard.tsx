import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./statisticCard.module.scss"
import { TaskList } from "../../page/quickStaistics"
import { Task } from "../../reducer"


type staisticsCardType = {
    className?: string,
    value: TaskList,
    onChange: (s: TaskList, tasks: Task[])=>any,
    showBoarder: boolean,
    tasks: Task[]
}

export default function StaisticsCard({value, onChange, className, showBoarder, tasks}: staisticsCardType){

    const [removeBoarder, setRomoveBoarder]=useState(false) // for the feature, when click twice, border will disppear, filter will disppear

    // If didn't select this box, setRomoveBoarder back to false
    useEffect(()=>{
        if(!showBoarder){
            setRomoveBoarder(false)
        }
    },[showBoarder])

    return <div className = {classNames(styles.box, {[styles.showBoarder]: showBoarder && removeBoarder},className)} 
        onClick ={()=>{
            if(!removeBoarder){ // first click, show boarder, show filtered tasks  
                onChange(value, value.tasks)
                setRomoveBoarder(true)
            }else { // second click, boarder disappear, and show all tasks
                setRomoveBoarder(false)
                onChange(value, tasks)
            }
        }}
    >
        <div className = "h2">{value.title}</div>
        <div className = "h1">{value.number}</div>
    </div>
}