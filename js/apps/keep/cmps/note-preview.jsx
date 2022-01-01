import { DynamicCmp } from './dynamic-cmps/DynamicCmp.jsx'
import { ColorInput } from './ColorInput.jsx'
export class NotePreview extends React.Component {
    state = {
        noteColor: 'white',
    }

    onChangeNoteColor = (ev) => {
        this.setState({ noteColor: ev.target.value })
    }

    render() {
        const { noteColor } = this.state
        const { loadNotes, note } = this.props
        if (!note) return <div> loading</div>
        else {
            return (
                <section
                style={{ backgroundColor: noteColor }}

                    className="note-preview">
                    <DynamicCmp loadNotes={loadNotes}
                        note={note}/>
                    <div className="note-preview-elements">
                        <button onClick={() => this.props.onEditNote(note)}>
                            Edit
                        </button>
                        <button onClick={() => this.props.onDeleteNote(note.id)}>
                            <img className="delete-note-img" src="./assets/imgs/keep-app/trash.png" alt="" />
                        </button>
                        <button onClick={() => this.props.onDuplicateNote(note.id)}>
                            <img className="copy-note-img" src="./assets/imgs/keep-app/copy.png" alt="" />
                        </button>
                        <button onClick={() => this.props.onPinnNote(note.id)}>
                        <img className="copy-note-img" src="./assets/imgs/keep-app/pinned.png" alt="" />
                        </button>
                        <ColorInput note={note} onChangeNoteColor={this.onChangeNoteColor} />
                    </div>
                </section>
            )
        }
    }
}
