import { TextNote } from './note-text.jsx'
import { ImgNote } from './note-img.jsx'
import { TodosNote } from './note-todos.jsx'
import { VideoNote } from './note-video.jsx'

export function DynamicCmp({ note, onDeleteNote }) {

    switch (note.type) {
        case 'note-txt':
            return <TextNote
                onDeleteNote={onDeleteNote}
                note={note} />
        case 'note-img':
            return <ImgNote
                onDeleteNote={onDeleteNote}
                note={note} />
        case 'note-todos':
            return <TodosNote
                onDeleteNote={onDeleteNote}
                note={note} />
        case 'note-video':
            return <VideoNote
                onDeleteNote={onDeleteNote}
                note={note} />
        default:
            return <React.Fragment></React.Fragment>
    }
}
