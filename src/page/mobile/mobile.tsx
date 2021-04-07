import React, { useEffect, useState } from "react";
import QuickStaistics from "../quickStaistics";
import MobileTaskList from "./mobileTaskList"
import styles from "./mobile.module.scss"
import { useTypedSelector } from "../../kit/useTypedSelector"
import { Task } from "../../reducer"


export default function Desktop(){

    const tasks = useTypedSelector(state => state.tasks)

    const [showTasks, setShowTasks] = useState<Task[]>([])

    useEffect(()=>{
        setShowTasks(tasks)
    },[tasks])

    return <div className = {styles.container}>
            <div className = {styles.mobileContainer}>
                <QuickStaistics 
                    tasks = {tasks}
                    setTasks = {(t: Task[])=>{
                        setShowTasks(t)
                    }}
                />
                <MobileTaskList 
                    tasks = {showTasks}
                />
            </div>
        </div>
}