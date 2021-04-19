import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'


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

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                 type="checkbox"
                 checked={todo.completed}
                 style={styles.input}
                 onChange={() => onChange(todo.id)} 
                 />
            
            <strong>{index+1}</strong>
            &nbsp;
            {todo.title}
            </span>

            <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
            
        </li>
    )
}

TodoItem.propTypes = {
    todo:  PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem