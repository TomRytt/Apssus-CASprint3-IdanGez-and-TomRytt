// import { ColorInput } from 'ץ./ColorInput.jsx'

export function DynamicCmp({ note, noteColor }) {

    switch (note.type) {
        case 'note-txt':
            return (
                <div
                    style={{ backgroundColor: noteColor }}
                    className="text-note">
                    {note.info.txt}
                </div>
            )
        case 'note-img':
            return (
                <div className="image-note"
                    style={{ backgroundColor: noteColor }}>
                    <div className="image-note-title">{note.info.title}</div>
                    <img className="image-note-img" src={note.info.url} alt="" />
                </div>
            )
        case 'note-todos':
            return (
                <div
                    style={{ backgroundColor: noteColor }}
                    className="todos-note-label">{note.info.label}
                    {note.info.todos.map((todo, idx) => {
                        return <div className="todo-note-list" key={idx}>{todo.txt}<span>{todo.doneAt}</span>
                        </div>
                    })}
                </div>
            )
        case 'note-video':
            return (
                <div className="video-note"
                    style={{ backgroundColor: noteColor }}
                >
                    <iframe width="420" height="315"
                        src={note.info.url}>
                    </iframe>
                </div>
            )
    }
}
