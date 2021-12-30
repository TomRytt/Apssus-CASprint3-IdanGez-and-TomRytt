import {NotePreview} from './note-preview.jsx';

// Add functions (as props) that would be rendered by notesApp
export function NoteList({notes}) {
	return (
		<section className='note-list'>
			{notes.map((note, idx) => (
				<React.Fragment key={idx}>
					<NotePreview note={note} />
				</React.Fragment>
			))}
		</section>
	);
}

// key={note.id}
