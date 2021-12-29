export function TodosNote({ note }) {
    return (
        <div className="todos-note">
            {note.info.todos.map((todo, idx) => {
                return <div className="todo-note" key={idx}>{todo.txt}<span>{todo.doneAt}</span></div>
            })}
        </div>
    )
}

