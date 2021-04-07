import React, { useEffect, useState } from "react";
import QuickStaistics from "../quickStaistics";
import TaskList from "../taskList"
import styles from "./desktop.module.scss"
import { useTypedSelector } from "../../kit/useTypedSelector"
import { Task } from "../../reducer"


export default function Desktop(){

    const tasks = useTypedSelector(state => state.tasks)

    // set task for filter 
    const [showTasks, setShowTasks] = useState<Task[]>([])

    useEffect(()=>{
        setShowTasks(tasks)
    },[tasks])

    return <div className = {styles.container}>
            <div className = {styles.desktopContainer}>
                <QuickStaistics 
                    tasks = {tasks}
                    setTasks = {(t: Task[])=>{
                        setShowTasks(t)
                    }}
                />
                <TaskList 
                    tasks = {showTasks}
                />
            </div>
        </div>
}