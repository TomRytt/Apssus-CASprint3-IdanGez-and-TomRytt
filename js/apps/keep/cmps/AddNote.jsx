import { DynamicTodoAdd } from './dynamic-cmps/dynamicTodoAdd.jsx'


export class AddNote extends React.Component {

    state = {
        type: ''
    }

    handleChange = (ev) => {
        const value = ev.target.value;
        this.setState((prevState) => ({ ...prevState, type: value }))
    }

    render() {
        const { loadNotes, onAddNote, handleChange } = this.props
        const { type } = this.state
        return (
            <div className="note-add">
                <div className="note-add-buttons">
                    <button value="text" onClick={this.handleChange}>Note</button>
                    <button value="img" onClick={this.handleChange}>Image</button>
                    <button value="todos" onClick={this.handleChange}>Todos</button>
                    <button value="video" onClick={this.handleChange}>Video</button>
                </div>
                <div className="note-add-dynamic-form">
                    <DynamicTodoAdd
                        loadNotes={loadNotes}
                        onAddNote={onAddNote}
                        handleChange={handleChange}
                        type={type} />
                </div>
            </div >)
    }
}