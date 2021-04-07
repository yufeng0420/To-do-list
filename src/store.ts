import { createStore, applyMiddleware} from "redux";
import reducer, {TaskReducer} from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

const middlewareArray = [thunkMiddleware];

type action = {
    type: string,
    payload: any
}
export type Thunk<T=TaskReducer> = ThunkAction<void, T, null, action>

const middleware = applyMiddleware(...middlewareArray);
const Store = createStore<TaskReducer|undefined, any, any, any>(reducer, undefined, composeWithDevTools(middleware));

export default Store 