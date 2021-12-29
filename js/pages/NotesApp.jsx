import {noteService} from '../apps/keep/services/note.service.js';
import {NoteList} from '../apps/keep/cmps/note-list.jsx';
import {AddNote} from '../apps/keep/cmps/AddNote.jsx';
export class NotesApp extends React.Component {

	state ={
		notes: [],
		filterBy: null,
	};

	componentDidMount() {
		this.loadNotes();
	}

	loadNotes = () => {
		const notes = noteService.query()
		this.setState({notes})
	}
	
	// onSetFilter = (filterBy) => {
	// 	this.setState({filterBy}, this.loadBooks)
	// }

	render() {
		const {notes} = this.state;
		return (
			<section className="note=App">
			<h1>NotesApp</h1>
				<AddNote/>
				<NoteList notes ={notes}/>

			</section>
		)
		
	}
}
