import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes, loadNotes, onDeleteNote, onDuplicateNote, onEditNote, onPinnNote }) {
	return (
		<section className='note-list'>
			{notes.map((note, idx) => (
				<NotePreview
					key={idx}
					loadNotes={loadNotes}
					onPinnNote={onPinnNote}
					onDeleteNote={onDeleteNote}
					onDuplicateNote={onDuplicateNote}
					onEditNote={onEditNote}
					note={note}
				/>))}
		</section>
	);
}
