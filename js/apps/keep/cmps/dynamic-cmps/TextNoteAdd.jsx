import {noteService} from '../../services/note.service.js'
export class TextNoteAdd extends React.Component {

    state = {
        input: ''
    }

    handleChange = ({ target }) => {
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, input: value }));
        // console.log(value);
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const input = this.state;
        console.log(input);
        noteService.addTxtNote(input);
        this.setState({ input: '' });
        // this.props.loadNotes();
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
                        id='addNote'
                        name='content'
                        value={input}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}



