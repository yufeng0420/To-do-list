import {TaskReducer} from "../reducer";
import {useSelector} from "react-redux";

export function useTypedSelector<T>(
    selector: (state: TaskReducer) => T,
    equalityFn?: (left: T, right: T) => boolean): T {
    return useSelector<TaskReducer, T>(selector, equalityFn);
}