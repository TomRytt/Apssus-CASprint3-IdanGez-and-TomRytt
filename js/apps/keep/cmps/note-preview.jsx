import { DynamicCmp } from './dynamic-cmps/DynamicCmp.jsx'
export class NotePreview extends React.Component {


    render() {

        const { loadNotes , onDeleteNote, note } = this.props
        console.log(note)
        if (!note) return <div> loading</div>
        else {
            return (
                <section className="note-preview">
                    <DynamicCmp loadNotes = {loadNotes} 
                                onDeleteNote= {onDeleteNote}
                                note={note} />
                </section>
            )
        }
    }
}
