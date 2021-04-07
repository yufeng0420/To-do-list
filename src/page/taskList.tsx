import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./taskList.module.scss"
import TaskDetailDialog from "./taskDetailDialog"
import TaskCard from "../components/taskCard/taskCard"
import Dialog from "../components/dialog/dialog"
import Cross from "../components/Icon/cross"
import Select from "../components/select/select"
import Buttons from "../components/buttons/buttons"
import Search from "../components/search/search"
import { Task, initTask, deleteTask } from "../reducer"

type TaskListtype = {
    tasks: Task[], 
}

export default function TaskList({ tasks }: TaskListtype){

    const dispatch = useDispatch();

    const [showRemoveDialog, setShowRemoveDialog] = useState(false)
    const [showTaskDialog, setShowTaskDialog] = useState(false)
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]) // for sort tasks
    const [sortValue, setSortValue] = useState("None")
    const [subject, setSubject] = useState("")
    const [task, setTask] = useState<Task>(initTask) // set this task to edit or remove
    const copyTasks = tasks.slice() // get one tasks copy

    useEffect(()=>{
        setFilteredTasks(tasks)
    },[tasks])

    useEffect(()=>{
        const filterTasks = copyTasks.filter((c)=> c.subject.toLocaleLowerCase().includes(subject.toLowerCase()))
        setFilteredTasks(filterTasks)
    },[subject])


    // Delete one task and close dialog
    function removeTask(){
        dispatch(deleteTask(task._id))
        setShowRemoveDialog(false)
    }

    // Sort tasks
    function sortTasks(e: string){
        setSortValue(e)
        if(e === "Status"){
            copyTasks.sort((a:any, b:any)=> b.status.localeCompare(a.status))
            setFilteredTasks(copyTasks)
        } else if(e === "Priority"){
            copyTasks.sort((a:any, b:any)=>b.priority.localeCompare(a.priority))
            copyTasks.sort((a:any, b:any)=> b.status.localeCompare(a.status))
            setFilteredTasks(copyTasks)
        }else {
            setFilteredTasks(tasks)
        }
    }
    
    return <div className = {styles.box}>
        <div className = {styles.headerBox}>
            <div className = {classNames(styles.header, "h1")}>
                Tickets
            </div>
            <div className = {styles.sortBox}>
                <Search  
                    onChange = {(e)=> setSubject(e.target.value)}
                    filterValue = {subject}
                    placeholder = {"Search subject here"}
                />
                <div className = {styles.sort}>Sort by  
                    <Select
                        handleChange={(e)=>sortTasks(e)} 
                        options = {["Status", "Priority", "None"]} 
                        value = {sortValue}
                    />
                </div>
                <div 
                    className = {styles.addList} 
                    onClick = {()=>setShowTaskDialog(true)}
                >
                    <Cross/>
                </div>
            </div>
        </div>
        
        <div className = {styles.cardBox}>
            {filteredTasks.map((data, index)=>
                <TaskCard 
                    key = {index.toString()+"Task"}
                    task = {data}
                    clickEdit={(task)=>{
                        setShowTaskDialog(true)
                        setTask(task)
                    }}
                    clickRemove={(task)=>{
                        setShowRemoveDialog(true)
                        setTask(task)
                    }}
                />
            )}
        </div>
        <Dialog 
            showDialog = {showRemoveDialog}
            handleClose = {()=>{setShowRemoveDialog(false)}}
            className = {styles.removeDialog}
        >   
            <>
                <div className = {styles.header}>Are you sure you want to delete this task?</div>
                <Buttons 
                    leftText = "Yes"
                    leftClick = {removeTask}
                    rightText = "No" 
                    rightClick = {()=>{setShowRemoveDialog(false)}} 
                />
            </>
        </Dialog>
        <TaskDetailDialog 
            showDialog = {showTaskDialog}
            handleClose = {()=> setShowTaskDialog(false)}
            editTask = {task}
        />
    </div>
}
