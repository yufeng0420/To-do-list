import React, { useEffect, useState } from "react";
import Dialog from "../components/dialog/dialog"
import styles from "./taskDetailDialog.module.scss"
import RadioSelect from "../components/radioSelect/radioSelect"
import Textarea from "../components/textarea/textarea"
import Buttons from "../components/buttons/buttons"
import { initTask, Task, addTask, updateTask} from "../reducer"
import { useDispatch } from "react-redux";

type TaskDetailDialogType = {
    showDialog: boolean,
    handleClose: ()=>any
    editTask?: Task
}

export default function TaskDetailDialog({showDialog, handleClose, editTask}: TaskDetailDialogType){

    const dispatch = useDispatch();

    const [task, setTask] = useState<Task>(initTask)
    const [errorMessage, setErrorMessage] = useState("") // for show error after validation
    const isEdit = !!task._id

    useEffect(()=>{
        // if editTask exit, this will be edit popup else will be add popup
        if(editTask?._id){
            setTask(editTask)
        }
    },[editTask])

    useEffect(()=>{
        // when filled all, error will auto disppear 
        if(!!task.priority && !!task.status && !!task.subject){
            setErrorMessage("")
        }
    },[task])

    function taskValidation(){
        // do the validation
        if(!task.priority){
            setErrorMessage("Please check priority!")
        }else if (!task.status){
            setErrorMessage("Please check status!")
        }else if (!task.subject){
            setErrorMessage("Please check subject!")
        }else {// save data 
            if(isEdit){
                dispatch(updateTask(task))
            }else {
                dispatch(addTask(task)) 
            }
            closeHandler()
        }
    }

    // for set task data to initTask when close dialog
    function closeHandler(){ 
        setTask(initTask)
        handleClose()
    }
    
    return (
        <Dialog
            showDialog = {showDialog}
            handleClose = {closeHandler}
            className = {styles.dialog}
        >   
            <>
                <div className = {styles.header}>{isEdit ? "Edit Task" : "Add Task"}</div>
                <div className = {styles.status}>
                    <div className = {"h3"}>Please select task status.</div>
                    <RadioSelect 
                        options = {["To Do", "Complete"]} 
                        value = {task.status} 
                        onChange = {(s) => setTask({...task, status: s})}
                    />
                </div>
                <div className = {styles.status}>
                    <div className = {"h3"}>Please select task priority.</div>
                    <RadioSelect 
                        options = {["Low Priority", "Medium Priority", "Urgent"]} 
                        value = {task.priority} 
                        onChange = {(s) => setTask({...task, priority: s})}
                        className = {styles.priority}
                    />
                </div>
                <div className = {styles.status}>
                    <div className = {"h3"}>Please input subject of task.</div>
                    <Textarea 
                        placeholder = {"Please input subject here"}
                        value = {task.subject}
                        onChange = {(e) => setTask({...task, subject: e.target.value})}
                        totalCharacters = {200}
                    />
                </div>
                <div className = {styles.error}>{errorMessage}</div>
                <Buttons 
                    leftText = {isEdit ? "Edit" : "Add"}
                    leftClick = {taskValidation}
                    rightText = "Cancel" 
                    rightClick = {closeHandler} 
                />
            </>
        </Dialog>
    )
}