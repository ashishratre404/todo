import React, {useState} from 'react';
import Todoitems from './Todoitems';

const Todo = () => {

    const [ userInput, setUserInput] = useState('');
    const [todoItems, setTodoItems] = useState([]);


    const updatedDataa = (e) =>{
        setUserInput(e.target.value)
    }

    const items = () => {
        setTodoItems((oldTodo) => {
            return [...oldTodo, userInput];
        })
        setUserInput('')
    };
    
    const deleteTodo = (id) =>{
        setTodoItems((olditems) => {
            return olditems.filter((arrElement, index) =>{
                return index !== id;
            })
        })
    };

    return(
        <>
            <div className="container">
                <div className='todo'>
                    <br />
                    <h1> To-Do</h1>
                    <br />
                    <input type="text" placeholder='Add todo things' value={userInput} onChange={updatedDataa} />
                    <button onClick={items}>+</button>

                    <ol>
                        {
                            todoItems.map((todo, index) => {
                                 return <Todoitems key={index} text={todo} id={index} onSelect = {deleteTodo} />
                                 })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
};
export default Todo;