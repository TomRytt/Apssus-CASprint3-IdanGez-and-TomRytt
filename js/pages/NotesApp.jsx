import { noteService } from '../apps/keep/services/note.service.js';
import { NoteList } from '../apps/keep/cmps/note-list.jsx';
import { AddNote } from '../apps/keep/cmps/AddNote.jsx';
import { ColorInput } from '../apps/keep/cmps/ColorInput.jsx'
export class NotesApp extends React.Component {

	state = {
		notes: [],
		filterBy: null,
	};

	componentDidMount() {
		this.loadNotes();
	}

	loadNotes = () => {
		noteService.query().then((notes) => {
			this.setState((prevState) => ({ ...prevState, notes }))
			// console.log(notes)
		})
	}
	// componentDidupdate() {
	// 	if(this.state.notes)

	// }
	// componentDidUpdate() {
	// 	noteService.query().then((notes) => {
	// 		if (notes.length && notes.length !== this.state.notes.length) {
	// 			this.loadNotes();
	// 		}

	// 	})
	// }


	onAddNote = (input, type) => {
		noteService.addNewNote(input, type).then(() => {
			this.loadNotes();
		})
	}

	onDeleteNote = (noteId) => {
		noteService.deleteNote(noteId).then(() => {
			this.loadNotes()
		})
	}
	// noteService.query().then((notes) => this.setState({ notes }))

	// onSetFilter = (filterBy) => {
	// 	this.setState({filterBy}, this.loadBooks)
	// }

	render() {
		const { notes } = this.state;
		return (
			<section className="note=App">
				<h1>NotesApp</h1>
				<AddNote
					loadNotes={this.loadNotes}
					handleChange={this.handleChange}
					onAddNote={this.onAddNote}
					notes={notes} />
				<NoteList
					loadNotes={this.loadNotes}
					onDeleteNote={this.onDeleteNote}
					notes={notes} />
				{/* <ColorInput /> */}
			</section>
		)

	}
}


// TODO -
// 1. build all the crud function that will be sent forwards to the