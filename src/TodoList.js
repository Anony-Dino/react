import React from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';

const TodoList = (props) => {
    const { inputValue, list, handleInputChange, handleAddItem, handleDeleteItem } = props;

    return (
        <React.Fragment>
            <div>
                <input value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddItem}>提交</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index} onClick={() => { handleDeleteItem(index) }}>{item}</li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

// store.state 与 组件props的映射
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch 与 组件props的映射
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleAddItem() {
            const action = getAddItemAction();
            dispatch(action);
        },
        handleDeleteItem(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);