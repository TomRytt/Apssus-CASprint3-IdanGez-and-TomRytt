
export function DynamicNoteRender({ note }) {
    if (!note.type) return <React.Fragment></React.Fragment>
    switch (note.type) {
        case 'note-txt':
            return (
                <div
                    className="text-note">
                    {note.info.txt}
                </div>
            )
        case 'note-img':
            return (
                <div className="image-note">
                    <div className="image-note-label">{note.info.label}</div>
                    <img className="image-note-img" src={note.info.url} alt="" />
                </div>
            )
        case 'note-todos':
            return (
                <div className="todos-note-container">
                    <span className="todos-note-label">{note.info.label}</span>
                    {note.info.todos.map((todo, idx) => {
                        return <div className="todos-note-list" key={idx}>{todo.txt}
                        </div>
                    })}
                </div>
            )
        case 'note-video':
            return (
                <div className="video-note">
                    <div className="video-note-label">{note.info.label}</div>
                    <iframe width="250" height="200"
                        src={note.info.url}>
                    </iframe>
                </div>
            )
    }
}
