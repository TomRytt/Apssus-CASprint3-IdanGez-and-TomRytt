import {DynamicCmp} from './dynamic-cmps/DynamicCmp.jsx';
import {ColorInput} from './ColorInput.jsx';
export class NotePreview extends React.Component {
	state = {
		noteColor: 'white',
	};

	onChangeNoteColor = (ev) => {
		this.setState({noteColor: ev.target.value});
	};

	render() {
		const {noteColor} = this.state;
		const {loadNotes, note} = this.props;
		if (!note) return <div> loading</div>;
		else {
			return (
				<section className='note-preview'>
					<DynamicCmp loadNotes={loadNotes} note={note} noteColor={noteColor} />
					<button onClick={() => this.props.onDeleteNote(note.id)}>
						Delete Note
					</button>
					<button onClick={() => this.props.onDuplicateNote(note.id)}>
						Duplicate
					</button>
					<button onClick={() => this.props.onEditNote(note)}>Edit</button>
					<button onClick={() => this.props.onPinnNote(note.id)}>Pinn</button>
					<ColorInput note={note} onChangeNoteColor={this.onChangeNoteColor} />
				</section>
			);
		}
	}
}
