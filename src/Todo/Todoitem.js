import React, {useEffect, useState} from 'react'

const styles = {
    li: {
        display: 'flex',
        height: '1.5em',

        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '0px solid #ccc',
        borderRadius: '40px',
        backgroundColor: '#D1C4E9',
        marginBottom: '.9rem'
    },
    input: {
        marginRight: '2rem'

    }
}

export default function TodoItem({ todo, index, onToggle, removeTodo }) {
    const [isDone, setDone] = useState('')

    useEffect(() => {
        if (todo.completed) setDone('done')
    }, [todo.completed])

    return(
        <li style={styles.li}>
            <span className={isDone}>
                <input
                 type="checkbox"
                 checked={todo.completed}
                 style={styles.input}
                 onChange={() => onToggle(todo.id)}
                />
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}
