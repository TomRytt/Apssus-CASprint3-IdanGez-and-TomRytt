import { DynamicTodoAdd } from './dynamic-cmps/dynamicTodoAdd.jsx'


export class AddNote extends React.Component {

    state = {
        type: 'text'
    }

    handleChange = (ev) => {
        const value = ev.target.value;
        this.setState((prevState) => ({ ...prevState, type: value }))
    }

    render() {
        const { loadNotes } = this.props
        const { type } = this.state
        return (
            <div className="note-add-main">What's on your mind?
                <button value="text" onClick={this.handleChange}>Note</button>
                <button value="img" onClick={this.handleChange}>Image</button>
                <button value="todos" onClick={this.handleChange}>Todos</button>
                <button value="video" onClick={this.handleChange}>Video</button>
                <DynamicTodoAdd loadNotes={loadNotes} type={type} />
            </div>)
    }
}