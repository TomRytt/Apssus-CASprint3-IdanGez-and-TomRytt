import { TextNoteAdd } from './TextNoteAdd.jsx'
import { ImgNoteAdd } from './ImgNoteAdd.jsx'
import { TodoNoteAdd } from './TodoNoteAdd.jsx'
import { VideoNoteAdd } from './VideoNoteAdd.jsx'

export function DynamicTodoAdd({type}) {
    switch (type) {
        case 'text':
            return <TextNoteAdd />
        case 'img':
            return <ImgNoteAdd />
        case 'todos':
            return <TodoNoteAdd />
        case 'video':
            return <VideoNoteAdd />
        default:
            return <React.Fragment></React.Fragment>
    }
}
