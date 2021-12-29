import { TextNote } from './note-text.jsx'
import { ImgNote } from './note-img.jsx'
import { TodosNote } from './note-todos.jsx'
import { VideoNote } from './note-video.jsx'



export function DynamicCmp({note}) {

    switch (note.type) {
        case 'note-txt':
            return <TextNote note={note} />
        case 'note-img':
            return <ImgNote note={note} />
        case 'note-todos':
            return <TodosNote note={note} />
        case 'note-video':
            return <VideoNote note={note} />
        default:
            return <React.Fragment></React.Fragment>
    }
}
