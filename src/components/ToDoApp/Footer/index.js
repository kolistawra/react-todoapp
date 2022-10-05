function Footer({ setTodos, todos, todoFilter, setTodoFilter }) {

  const deleteAll = () => {
      setTodos(todos.filter(item => item.isCompleted === false))
  }

  let clearButton = null;
  if (todos.filter(item => item.isCompleted === true).length > 0) {
      clearButton = (
          <button
              className="clear-completed"
              onClick={deleteAll}>
              remove completed
          </button>
      )
  }
  let things=""
  if (todos.filter(item => item.isCompleted === false).length === 1) {
      things = ("item left")
  } else things = ("items left")

  return (
      <footer className="footer">
          <span className='todo-count'>{todos.filter(item => item.isCompleted === false).length} {things}</span>
          <ul className="filters">
              <li>
                  <a
                  href="#/"
                  id="all"
                  onClick={()=>{setTodoFilter(0)}}
                  className={todoFilter === 0 ? "selected" : null}
                  >all</a>
              </li>
              <li>
                  <a
                  href="#/active"
                  id="active"
                  onClick={()=>{setTodoFilter(1)}}
                  className={todoFilter === 1 ? "selected" : null}
                  >active</a>
              </li>
              <li>
                  <a
                  href="#/completed"
                  id="completed"
                  onClick={()=>{setTodoFilter(61)}}
                  className={todoFilter === 2 ? "selected" : null}
                  >completed</a>
              </li>
          </ul>
          {clearButton}
  </footer>
  )
}

export default Footer;