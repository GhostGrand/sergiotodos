import React, {useState} from 'react'

export default function AddTodo({ onCreate }) {

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div style={{ marginBottom: '1rem'}}>
            <input value={value} onChange={handleChange}/>
            <button onClick={() => onCreate(value)}>Добавить дело</button>
        </div>
    )

}
