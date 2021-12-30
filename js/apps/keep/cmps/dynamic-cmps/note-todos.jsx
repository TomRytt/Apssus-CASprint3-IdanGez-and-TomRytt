export class TodosNote extends React.Component {
    render() {
        const { note } = this.props
        return (
            <div className="todos-note-label">{note.info.label}
                {note.info.todos.map((todo, idx) => {
                    return <div className="todo-note-list" key={idx}>{todo.txt}<span>{todo.doneAt}</span>
                        <button onClick={() => this.props.onDeleteNote(note.id)}>Delete Note</button></div>
                })}
            </div>
        )
    }
}

