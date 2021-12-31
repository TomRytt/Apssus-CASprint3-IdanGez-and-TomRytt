import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes, loadNotes, onDeleteNote, onDuplicateNote, onEditNote }) {
	return (
		<section className='note-list'>
			{notes.map((note, idx) => (
				<NotePreview
					key={idx}
					loadNotes={loadNotes}
					onDeleteNote={onDeleteNote}
					onDuplicateNote={onDuplicateNote}
					onEditNote={onEditNote}
					note={note}
				/>
			))}
		</section>
	);
}
