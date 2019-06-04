import { TODOLIST_ACTIONS } from "./actionTypes";

const defaultState = {
  inputValue: "111",
  list: []
};

export default (state = defaultState, action) => {
  // 输入文本框
  if (action.type === TODOLIST_ACTIONS.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 添加列表项
  else if (action.type === TODOLIST_ACTIONS.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  // 删除列表项
  else if (action.type === TODOLIST_ACTIONS.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // 初始化列表
  else if (action.type === TODOLIST_ACTIONS.INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  console.log(state, action);
  return state;
};
