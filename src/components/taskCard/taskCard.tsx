import React from "react";
import classNames from "classnames";
import {Task} from "../../reducer"
import styles from "./taskCard.module.scss"
import NoteBook from "../Icon/noteBook"
import Trash from "../Icon/trash"
import Dot from "../Icon/dot"


type TaskCardType = {
    className?: string,
    task: Task,
    clickEdit:(e:Task)=> any,
    clickRemove:(e:Task)=> any,
    key: string
}

export default function TaskCard({className, task, clickEdit, clickRemove, key}: TaskCardType){

    // different priority, different colour
    function getDotcolor(){
        if (task.priority === "Urgent"){
            return "#E20A0A"
        } else if (task.priority === "Medium Priority"){
            return "#FFC700"
        } else {
            return "#3AEBB6"
        }
    }

    return <div className = {classNames(styles.box, className)} key = {key}>
        <div className = {styles.name}>{task?.subject}</div>
        <div className = {styles.status}>
            <div className = {task.status !== "Complete" ? styles.statusBox : styles.complete}>
                {task?.status}
            </div>
        </div>
        <div className = {classNames(styles.priority)} style = {{color: getDotcolor()}}>
            <div><Dot color = {getDotcolor()}/></div>
            {task?.priority}
        </div>
        <div className = {styles.iconBox}>
            <div className = {styles.icon} onClick={()=>clickEdit(task)}>
                <NoteBook/>
            </div>
            <div className = {styles.icon} onClick={()=>clickRemove(task)}>
                <Trash/>
            </div>
        </div>
    </div>
}