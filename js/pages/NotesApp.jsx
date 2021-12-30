import { noteService } from '../apps/keep/services/note.service.js';
import { NoteList } from '../apps/keep/cmps/note-list.jsx';
import { AddNote } from '../apps/keep/cmps/AddNote.jsx';
import { NoteFilter } from '../apps/keep/cmps/note-filter.jsx';
export class NotesApp extends React.Component {

	state = {
		notes: [],
		filterBy: null,
	};

	componentDidMount() {
		this.loadNotes();
	}

	loadNotes = () => {
		const {filterBy} = this.state
		noteService.query(filterBy).then((notes) => {
			this.setState((prevState) => ({ ...prevState, notes }))
		})
	}

	onSetFilter = (filterBy) => {
		this.setState({ filterBy }, this.loadNotes)
		console.log('onsetfilter', filterBy)
	}

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

	render() {
		const { notes } = this.state;
		return (
			<section className="note=App">
				<h1>NotesApp</h1>
				<NoteFilter
					className="note-filter"
					filterBy={this.state.filterBy}
					onSetFilter={this.onSetFilter}
				/>
				<AddNote
					className="add-note-main"
					loadNotes={this.loadNotes}
					handleChange={this.handleChange}
					onAddNote={this.onAddNote}
					notes={notes}
				/>
				<NoteList
					loadNotes={this.loadNotes}
					onDeleteNote={this.onDeleteNote}
					notes={notes} />
			</section>
		)

	}
}


// TODO -
// 1. build all the crud function that will be sent forwards to the