import { TextNoteAdd } from './TextNoteAdd.jsx'
import { ImgNoteAdd } from './ImgNoteAdd.jsx'
import { TodoNoteAdd } from './TodoNoteAdd.jsx'
import { VideoNoteAdd } from './VideoNoteAdd.jsx'

export function DynamicTodoAdd({type, loadNotes}) {
    switch (type) {
        case 'text':
            return <TextNoteAdd loadNotes={loadNotes} />
        case 'img':
            return <ImgNoteAdd loadNotes={loadNotes} />
        case 'todos':
            return <TodoNoteAdd loadNotes={loadNotes} />
        case 'video':
            return <VideoNoteAdd loadNotes={loadNotes} />
        default:
            return <React.Fragment></React.Fragment>
    }
}
