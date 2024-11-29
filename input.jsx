import { useState } from 'react';
import './styles.scss';
import { FiPlus } from "react-icons/fi";

function Input({ addTodo }) {
    const [todo, setTodo] = useState('');

    // input 내용 즉각 반영 함수
    const handleTodo = (e) => {
        setTodo(e.target.value);
    }

    // 반영된 내용을 TodoTemplate에서 받아온 함수 내부에 있는 리스트에 넣는 함수
    const handleTodoList = () => {
        if (todo === '') return;
        setTodo(''); // 컴포넌트가 다시 렌더링 될 때 적용된다
        addTodo(todo); // 매개변수로 받아온 handleaddTodo를 지정된 이름인 addTodo로 사용
    }

    // Enter 치면 입력되도록 하는 함수
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleTodoList();
        }
    }

    return (
        <div className='TodoInsert'>
            <input type="text" placeholder='할 일을 입력하세요' name='todo' value={todo} onChange={handleTodo} onKeyDown={handleKeyPress} />
            <button className='button' onClick={handleTodoList}><FiPlus size={25} color='black'/></button>
        </div>
    )
}

export default Input;