import {noteService} from '../apps/keep/services/note.service.js';
import {NoteList} from '../apps/keep/cmps/note-list.jsx';
import {AddNote} from '../apps/keep/cmps/AddNote.jsx';
import {NoteFilter} from '../apps/keep/cmps/note-filter.jsx';
import {NoteEdit} from '../apps/keep/cmps/NoteEdit.jsx';

const {Route} = ReactRouterDOM;
export class NotesApp extends React.Component {
	state = {
		notes: [],
		filterBy: null,
		noteUpdate: null,
	};

	componentDidMount() {
		this.loadNotes();
	}

	loadNotes = () => {
		const {filterBy} = this.state;
		noteService.query(filterBy).then((notes) => {
			this.setState((prevState) => ({...prevState, notes}));
		});
	};

	onSetFilter = (filterBy) => {
		this.setState({filterBy}, this.loadNotes);
		// console.log('onsetfilter', filterBy)
	};

	onAddNote = (input, type) => {
		console.log(input, type);
		noteService.addNewNote(input, type).then(() => {
			this.loadNotes();
		});
	};

	onDeleteNote = (noteId) => {
		noteService.deleteNote(noteId).then(() => {
			this.loadNotes();
		});
	};

	onDuplicateNote = (id) => {
		noteService.duplicateNote(id);
		this.loadNotes();
	};

	onEditNote = (note) => {
		// ev.stopPropagation();
		// noteService.editNote(id);

		// this.loadNotes();
		window.location.replace(`/index.html#/notes:${note.id}`);
	};

	onPinnNote = (id) => {
		noteService.pinnNote(id);
		this.loadNotes();
	};

	render() {
		const {notes} = this.state;
		return (
			<section className='note=App'>
				<h1>Keep App</h1>
				<NoteFilter
					className='note-filter'
					filterBy={this.state.filterBy}
					onSetFilter={this.onSetFilter}
				/>
				<Route
					component={() => (
						<NoteEdit loadNotes={this.loadNotes} note={this.state.noteUpdate} />
					)}
					path='/notes:noteId'
				/>
				<AddNote
					className='add-note-main'
					loadNotes={this.loadNotes}
					handleChange={this.handleChange}
					onAddNote={this.onAddNote}
					notes={notes}
				/>
				<NoteList
					loadNotes={this.loadNotes}
					onDeleteNote={this.onDeleteNote}
					notes={notes}
					onDuplicateNote={this.onDuplicateNote}
					onEditNote={this.onEditNote}
					onPinnNote={this.onPinnNote}
				/>
			</section>
		);
	}
}
