import {NotePreview} from './note-preview.jsx';

export function NoteList({notes, loadNotes, onDeleteNote}) {
	return (
		<section className='note-list'>
			{notes.map((note, idx) => (
				<NotePreview
					key={idx}
					loadNotes={loadNotes}
					onDeleteNote={onDeleteNote}
					note={note}
				/>
			))}
		</section>
	);
}
