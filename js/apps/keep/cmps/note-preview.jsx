import { DynamicCmp } from './dynamic-cmps/DynamicCmp.jsx'

// const { Link } = ReactRouterDOM;

export function NotePreview({ note }) {
    return (
        // <Link to={`/note/${note.id}`} className="note-preview"></Link>
        <section className="note-preview">
            <DynamicCmp note={note} />
        </section>
    )
}