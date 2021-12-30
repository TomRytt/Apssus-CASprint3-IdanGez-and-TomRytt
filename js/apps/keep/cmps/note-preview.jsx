import { DynamicCmp } from './dynamic-cmps/DynamicCmp.jsx'
import { ColorInput } from './ColorInput.jsx'
export class NotePreview extends React.Component {
    state = {
        noteColor: 'white',
    }

    onChangeNoteColor = (ev) => {
        this.setState({ noteColor: ev.target.value })
        console.log(this.state)
    }

    render() {
        const { noteColor } = this.state
        const { loadNotes, onDeleteNote, note } = this.props
        if (!note) return <div> loading</div>
        else {
            return (
                <section
                    className="note-preview">
                    <DynamicCmp loadNotes={loadNotes}
                        onDeleteNote={onDeleteNote}
                        note={note}
                        noteColor={noteColor}
                    />
                    <button onClick={() => this.props.onDeleteNote(note.id)}>Delete Note</button>
                    <ColorInput  note={note} onChangeNoteColor={this.onChangeNoteColor} />
                </section>
            )
        }
    }
}
