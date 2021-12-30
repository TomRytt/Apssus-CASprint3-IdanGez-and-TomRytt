export function TodosNote({ note }) {
    return (
        <div className="todos-note-label">{note.info.label}
            {note.info.todos.map((todo, idx) => {
                return <div className="todo-note-list" key={idx}>{todo.txt}<span>{todo.doneAt}</span></div>
            })}
        </div>
    )
}

