import { produce } from "immer";
import { v4 as uuidv4 } from 'uuid'
import { tasks } from "./mockData"
import {Thunk} from "./store"


export const GET_TASKS = "@toDoList/get-tasks";
export const ADD_TASK = "@toDoList/add-task";
export const EDIT_TASK = "@toDoList/edit-task";
export const REMOVE_TASK = "@toDoList/remove-task";


export type Task = {
    _id: string,
    subject: string,
    status: "Complete" | "To Do" | null,
    priority: "Low Priority" | "Urgent" | "Medium Priority" | null,
}

export type TaskReducer = {
    tasks: Task[]
}

export const initTask: Task = {
    _id: "",
    subject: "",
    status: null,
    priority: null,
}

export const init: TaskReducer = {
    tasks: []
};

export default produce((draft: TaskReducer = init, {type, payload}): TaskReducer => {
    switch (type) {
        case GET_TASKS:
            draft.tasks = payload
            return draft
        case ADD_TASK:
            draft.tasks = payload
            return draft
        case EDIT_TASK:
            draft.tasks = payload
            return draft
        case REMOVE_TASK:
            draft.tasks = payload
            return draft
        default:
            return draft
    }
})

// get all tasks
export const getTasks = (): Thunk =>(
    dispatch,
    getState
) => {
    const data = tasks
    dispatch({type: GET_TASKS, payload: data});
}

// add one new task to list
export const addTask = (task: Task): Thunk => (
    dispatch,
    getState
) => {
    const state = getState();
    const orig = state.tasks
    task._id = uuidv4()

    const newTasks = produce(orig, (draft)=> {
        draft.unshift(task)
        return draft
    })

    dispatch({type: ADD_TASK, payload: newTasks});
}


// update one task from list
export const updateTask = (task: Task): Thunk => (
    dispatch,
    getState
) => {
    const state = getState();
    const orig = state.tasks

    const newTasks = produce(orig, (draft)=> {
        const index = orig.findIndex((t)=>t._id === task._id)
        draft[index] = task
        return draft
    })

    dispatch({type: EDIT_TASK, payload: newTasks});
}

// delete one task from list
export const deleteTask = (id: string): Thunk => (
    dispatch,
    getState
) => {
    const state = getState();
    const orig = state.tasks

    const newTasks = produce(orig, (draft)=> {
        const index = orig.findIndex((t)=>t._id === id)
        draft.splice(index, 1)
        return draft
    })

    dispatch({type: REMOVE_TASK, payload: newTasks});
}




