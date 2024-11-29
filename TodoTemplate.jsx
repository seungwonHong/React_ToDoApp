import './styles.scss';
import Input from './input';
import TodoList from './TodoList';
import { useState } from 'react';


function TodoTemplate() {
    const [todoList, setTodoList] = useState([]);

    const handleaddTodo = (todo) => {
        // 리엑트에서 리스트는 id처럼 고유의 값이 있어야 함
      const  newtodo = {
            id: Date.now(),
            text: todo
        }
        setTodoList([...todoList, newtodo]);
    }

    return (
        <div className='wrapper'>
            <div className='title'>
                일정관리
            </div>

            <Input addTodo={handleaddTodo} />

            {todoList.length > 0 ? (
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default TodoTemplate;