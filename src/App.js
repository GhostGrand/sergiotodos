import React, {useState} from 'react'
import AddTodo from './Todo/AddTodo'
import TodoItem from "./Todo/Todoitem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить молоко'},
        {id: 3, completed: false, title: 'Купить почку'},
    ])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos([...todos,
                {
                    id: Math.max.apply(null, todos.map(elem => elem.id)) + 1,
                    completed: false,
                    title: title
                }
            ]
        )
    }

    return (
        <div className="wrapper">
            <h1 className='sergoheader'>Sergo TODO</h1>
            <AddTodo onCreate={addTodo}/>
            {todos.length ?
                <>
                    <ul style={styles.ul}>
                        {todos.map((todo, index) => (
                            <TodoItem
                                todo={todo}
                                key={index}
                                index={index}
                                onToggle={toggleTodo}
                                removeTodo={removeTodo}
                            />
                        ))}
                    </ul>
                </>
                :
                <p className='notods'>Нет дел</p>
            }
        </div>
    )
}
