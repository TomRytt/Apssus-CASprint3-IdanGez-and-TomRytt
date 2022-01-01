import { TextNoteAdd } from './TextNoteAdd.jsx'
import { ImgNoteAdd } from './ImgNoteAdd.jsx'
import { TodoNoteAdd } from './TodoNoteAdd.jsx'
import { VideoNoteAdd } from './VideoNoteAdd.jsx'

export function DynamicNoteAdd({ type, onAddNote }) {
    switch (type) {
        case 'text':
            return <TextNoteAdd
                onAddNote={onAddNote} />
        case 'img':
            return <ImgNoteAdd
                onAddNote={onAddNote} />
        case 'todos':
            return <TodoNoteAdd
                onAddNote={onAddNote} />
        case 'video':
            return <VideoNoteAdd
                onAddNote={onAddNote} />
        default:
            return <React.Fragment></React.Fragment>
    }
}
