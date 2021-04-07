import classNames from "classnames";
import React, { useState } from "react";
import StaisticsCard from "../components/staisticCard/statisticCard"
import styles from "./quickStaistics.module.scss"
import { Task } from "../reducer"

type QuickStaisticsType = {
    tasks: Task[],
    setTasks:(tasks: Task[])=>any // export task lists to TaskList component 
}

enum title{
    ALL = "All Tasks",
    TODO = "To Do Tasks",
    URGENT = "Urgent Tasks",
    COMPLETE = "Completed Tasks",
    NOTHING = "Nothing"
}

export type TaskList = {
    title: title,
    number: number,
    tasks: Task[]
}

export default function QuickStaistics({tasks, setTasks}: QuickStaisticsType){

    const toDoTasks = tasks?.filter((t)=> t.status === "To Do")
    const urgentTasks = tasks?.filter((t)=> t.priority === "Urgent")
    const completeTasks = tasks?.filter((t)=> t.status === "Complete")
    const initTaskList : TaskList = { title: title.NOTHING, number: 0, tasks: [] }
    const [selectTask, setSelectTask] = useState<TaskList>(initTaskList)

    // create new list for map
    const taskList: TaskList[] = [{
            title: title.ALL,
            number: tasks?.length,
            tasks: tasks
        }, {
            title: title.TODO,
            number: toDoTasks?.length,
            tasks: toDoTasks
        }, {
            title: title.URGENT,
            number: urgentTasks?.length,
            tasks: urgentTasks
        }, {
            title: title.COMPLETE,
            number: completeTasks?.length,
            tasks: completeTasks
        }]

    function changeValue(e:TaskList, tasks: Task[]){
        setSelectTask(e)
        setTasks(tasks)
    }


    return <div className = {styles.quickStaisticsBox}>
        <div className = {classNames(styles.header, "h1")}>
            Quick Staistics
        </div>
        <div className = {styles.cardBox}>
            {taskList?.map((m, index)=> {
                let showBoarder = m.title === selectTask.title
                return  <StaisticsCard 
                        keyId = {index.toString()}
                        value = {m}
                        onChange = {(e, tasks)=>changeValue(e, tasks)}
                        showBoarder = {showBoarder}
                        tasks = {tasks}
                    />
                }
            )}
        </div>
    </div>
}
