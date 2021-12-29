export function TodosNote({ note }) {
    console.log(note)
    return (
        <div className="todos-note">
            {note.info.todos.map((todo, idx) => {
                return <div key={idx}>{todo.txt}<span>{todo.doneAt}</span></div>
            })}
        </div>
    )
}

