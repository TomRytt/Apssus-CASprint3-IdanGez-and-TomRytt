import {noteService} from '../../services/note.service.js'
export class TextNoteAdd extends React.Component {

    state = {
        input: '',
        type:'note-txt'
    }

    handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({ ...prevState, input: value }));
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const {input, type} = this.state;        
        noteService.addNewNote(input, type);
        this.setState({ input: '' });
        this.props.loadNotes();
    };


    render() {
        const { input } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor='add-text-note'>Add note:</label>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        id='add-text-note'
                        name='input'
                        value={input}
                    />
                    <button>Add Text-Note</button>
                </form>
            </div>
        )
    }
}



