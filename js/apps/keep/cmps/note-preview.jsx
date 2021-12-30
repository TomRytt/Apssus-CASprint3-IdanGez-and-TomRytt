import { DynamicCmp } from './dynamic-cmps/DynamicCmp.jsx'
export class NotePreview extends React.Component {

    state = {
        note: this.props.note,
    }

    render() {
        const { note } = this.state
        if (!note) return <div> loading</div>
        else {
            return (
                <section className="note-preview">
                    <DynamicCmp note={note} />
                </section>
            )
        }
    }
}


// export function NotePreview({ note }) {


// import { DynamicCmp } from './dynamic-cmps/DynamicCmp.jsx'

// // const { Link } = ReactRouterDOM;

// export function NotePreview({ note }) {
//     return (
//         // <Link to={`/note/${note.id}`} className="note-preview"></Link>
//         <section className="note-preview">
//             <DynamicCmp note={note} />
//         </section>
//     )
// }