import {NotePreview} from './note-preview.jsx'

export function NoteList({notes}){
    return (
        
        <section className="note-list">
            {notes.map((note,idx) =><React.Fragment key={idx}> <NotePreview note={note} /></React.Fragment> )}
        </section>
    )
}

// key={note.id}