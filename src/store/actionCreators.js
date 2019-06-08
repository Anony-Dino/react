import { ACTION_TYPES } from "./actionTypes";

export const getInputChangeAction = (value) => {
    return {
        type: ACTION_TYPES.CHANGE_INPUT_VALUE,
        value: value
    }
}

export const getAddItemAction = () => {
    return {
        type: ACTION_TYPES.ADD_ITEM
    }
}

export const getDeleteItemAction = (index) => {
    return {
        type: ACTION_TYPES.DELETE_ITEM,
        index: index
    }
}