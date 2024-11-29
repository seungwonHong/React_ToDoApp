import { useState } from 'react';
import './styles.scss';
import { FaTrashCan } from "react-icons/fa6";

function TodoList({ todoList, setTodoList }) {
    const [isChecked, setisChecked] = useState(new Set()); // 중복되지 않는 객체

    const handleChecked = (id) => {
        const newCheckedItems = new Set(isChecked); // 객체 생성

        if (newCheckedItems.has(id)) {
            newCheckedItems.delete(id);
        } else {
            newCheckedItems.add(id);
        }
        setisChecked(newCheckedItems);
    }

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id)); // todo는 배열의 각 요소를 의미한다

    }

    return (
        <div className='TodoList'>
            {todoList.map(({ id, text }) => { // 리스트에서 id와 text를 가져온다
                return (
                    <div key={id} > 
                        <div className='todoItems'>
                            <input type='checkbox' checked={isChecked.has(id)} onChange={() => handleChecked(id)} />

                            <span className={isChecked.has(id) ? 'workDone' : 'workToDo'}>
                                {text}
                            </span>

                            <div className='spacer'></div>

                            <FaTrashCan color='red' style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)} />

                        </div>

                        <div style={{ borderBottom: '1px solid gray', marginTop: '20px', marginBottom: '20px' }} />
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;