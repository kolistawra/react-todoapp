import { useState, useEffect } from "react";

const initialFormValues = { input: ""}

function Form ( { todos, setTodos }) {

    const [ form, setForm ] = useState(initialFormValues)

    useEffect( () => {
        setForm(initialFormValues)
    }, [todos])


    const onChangeInput = (e) => {
        setForm({...form, input: e.target.value, isCompleted: false})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.input === "") {
            alert("Add a task!")
            return false
        }
        setTodos([...todos, form])
        // console.log("form",form) 
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input 
                className="new-todo"
                autoFocus
                autoComplete="off"
                name="input"
                placeholder="What needs to be done?"
                value={form.input}
                onChange={onChangeInput}
                />
            </div>
        </form>
    )
}

export default Form