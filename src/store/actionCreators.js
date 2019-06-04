import { TODOLIST_ACTIONS } from "./actionTypes";
import Axios from "axios";

export const getInputChangeAction = (value) => ({
    type: TODOLIST_ACTIONS.CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: TODOLIST_ACTIONS.ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: TODOLIST_ACTIONS.DELETE_TODO_ITEM,
    index
});

export const getInitListAction = (data) => ({
    type: TODOLIST_ACTIONS.INIT_LIST,
    data: data
});

export const getTodoList = () => {
    return (dispatch) => {
        Axios.get(
            "https://2764d07e-9c30-42d6-9d59-2c97e0180876.mock.pstmn.io/api/todolist"
        ).then(res => {
            const data = res.data;
            const action = getInitListAction(data);
            dispatch(action);
        });
    }
}