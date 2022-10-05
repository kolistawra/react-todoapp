import { useState, useEffect } from "react";
import Form from "./ToDoApp/Form"
import List from "./ToDoApp/List"
import Footer from "./ToDoApp/Footer"

function ToDoApp () {
   
    const [ todoFilter, setTodoFilter ]= useState(0)
    const [ click, setClick ] = useState(false)
    const [ todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [])

    useEffect( () => {
        // console.log("todos", todos) 
        localStorage.setItem("todos", JSON.stringify(todos))

    }, [todos])

    let foot = null
    if ( todos.length > 0 ) {
        foot = (
            <Footer todos={todos} setTodos={setTodos} todoFilter={todoFilter} setTodoFilter={setTodoFilter} />
        )
    }

    const allDone = () => setClick( click === false ? true : false )

    const selectAll = () => {
        if ( click === true ) {
            setTodos(todos.map( e => ({...e, isCompleted: true})))
        } else {
            setTodos(todos.map( e => ({...e, isCompleted: false})))
        }
    }

    let toggleAll = null
    if ( todos.length > 0 ) {
        toggleAll = (
            <div>
                <input 
                type="checkbox" 
                id="toggle-all"
                className="toggle-all"
                checked={click}
                onChange={selectAll}
                />
                <label 
                htmlFor="toggle-all" 
                onClick={allDone}
                >
                all done</label>
            </div>
        )
    }

    return (
        <div className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <Form todos={todos} setTodos={setTodos} />
            </header>
            <section>
            {toggleAll}
            <List todos={todos} setTodos={setTodos} todoFilter={todoFilter} />
            </section>
            <footer>
                {foot} 
            </footer>
        </div>
    )
}

export default ToDoApp