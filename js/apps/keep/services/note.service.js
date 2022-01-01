import {storageService} from '../../../services/storage.service.js';
import {utilService} from '../../../services/util.service.js';
export const noteService = {
	query,
	addNewNote,
	deleteNote,
	duplicateNote,
	// editNote,
	pinnNote,
	updateNote,
	_getNoteById,
};

const STORAGE_KEY = 'notesDB';
const gNotes = [
	{
		id: 'n101',
		type: 'note-txt',
		isPinned: false,
		info: { txt: 'Fullstack Me Baby!' },
		style: { backgroundColor: '#b7ebff' },
	},
	{
		id: 'n102',
		type: 'note-img',
		isPinned: false,
		info: {
			url: 'https://images.unsplash.com/photo-1599302592205-d7d683c83eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8&w=1000&q=80',
			label: 'Sunset in malibu',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n103',
		type: 'note-todos',
		isPinned: false,
		info: {
			label: 'Get my stuff together:',
			todos: [
				{txt: 'Driving liscence', doneAt: null},
				{txt: 'Coding power', doneAt: 187111111},
			],
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n104',
		type: 'note-video',
		isPinned: false,
		info: {
			url: 'https://www.youtube.com/embed/LHAgUebnlXI',
			label: 'lobster video',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n105',
		type: 'note-txt',
		isPinned: false,
		info: {txt: 'Left is right, right is wrong '},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n106',
		type: 'note-txt',
		isPinned: false,
		info: { txt: 'If you bow at all, bow low' },
		style: { backgroundColor: '#b7ebff' },
	},
	{
		id: 'n107',
		type: 'note-todos',
		isPinned: false,
		info: {
			label: 'Note App todos:',
			todos: [
				{txt: 'Allow creating, updating and deleting notes', doneAt: null},
				{txt: `Support setting the note's background color and other styles`, doneAt: 187111111},
			],
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n108',
		type: 'note-video',
		isPinned: false,
		info: {
			url: 'https://www.youtube.com/embed/hQAHSlTtcmY',
			label: 'React 101',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n109',
		type: 'note-txt',
		isPinned: false,
		info: {txt: 'A man who cannot tolerate small misfortunes can never accomplish great things'},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n110',
		type: 'note-txt',
		isPinned: false,
		info: { txt: 'A needle is not sharp at both ends' },
		style: { backgroundColor: '#b7ebff' },
	},
	{
		id: 'n111',
		type: 'note-img',
		isPinned: false,
		info: {
			url: 'https://www.enjpg.com/img/2020/outer-space-background-3-500x313.jpg',
			label: 'Space',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n112',
		type: 'note-todos',
		isPinned: false,
		info: {
			label: 'Vacation:',
			todos: [
				{txt: 'Sunglasses', doneAt: null},
				{txt: 'Book', doneAt: 187111111},
				{txt: 'Beer', doneAt: 187111111},
				{txt: 'Towel', doneAt: 187111111},
			],
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n113',
		type: 'note-video',
		isPinned: false,
		info: {
			url: 'https://www.youtube.com/embed/vIALhyb7V-Y',
			label: 'קודינג אקדמי - המלצות בוגרים',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n114',
		type: 'note-txt',
		isPinned: false,
		info: {txt: 'The best time to plant a tree was 20 years ago. The second best time is today.'},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n115',
		type: 'note-txt',
		isPinned: false,
		info: { txt: 'Two good talkers are not worth one good listener' },
		style: { backgroundColor: '#b7ebff' },
	},
	{
		id: 'n116',
		type: 'note-img',
		isPinned: false,
		info: {
			url: 'https://images1.calcalist.co.il/picserver3/crop_images/2021/12/22/SJR0dslsY/SJR0dslsY_0_0_640_640_0_x-large.jpg',
			label: 'טונה: מזרח פרוע',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n117',
		type: 'note-todos',
		isPinned: false,
		info: {
			label: 'Before i got to sleep:',
			todos: [
				{txt: 'Brush my teeth', doneAt: null},
				{txt: 'kiss mommy and daddy ', doneAt: 187111111},
			],
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n118',
		type: 'note-video',
		isPinned: false,
		info: {
			url: 'https://www.youtube.com/embed/bLdjQJUY0VM',
			label: 'Ravid Plotnik - KuKuRiKu',
		},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n119',
		type: 'note-txt',
		isPinned: false,
		info: {txt: 'Cringe: When someone acts/ or is so embarrassing or awkward , it makes you feel extemely ashamed and/or embarrassed'},
		style: {backgroundColor: '#00d'},
	},
	{
		id: 'n120',
		type: 'note-img',
		isPinned: false,
		info: {
			url: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/93916346_10216774351047288_6718001198009417728_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=mwyon6giEMUAX_vRvOM&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-OIbiRBD6xaFhIob9_h3eApYquf7DYAFK2lcJ_bnn2vA&oe=61F472C6',
			label: 'How i feel about zoom studies',
		},
		style: {backgroundColor: '#00d'},
	},
];

function query(filterBy = null) {
	let notes = _loadNotesFromStorage();
	if (!notes || !notes.length) {
		notes = gNotes;
		_saveNotesToStorage(notes);
	}
	if (!filterBy) return Promise.resolve(notes);
	const filteredNotes = _getFilteredNotes(notes, filterBy);
	return Promise.resolve(filteredNotes);
}

function _getFilteredNotes(notes, filterBy) {
	const {searchValue, searchType} = filterBy;
	let filteredNotes = null;
	// filter types
	if (searchType === 'all') {
		filteredNotes = notes;
	} else {
		filteredNotes = notes.filter((note) => {
			if (searchType === note.type) return note;
		});
	}
	if (searchValue === '') {
		return filteredNotes;
	}
	return notes.filter((note) => searchFilteredNotes(note, searchValue));
}

function checkIfIncludes(data, searchValue) {
	if (data.toLowerCase().includes(searchValue.toLowerCase())) return true;
}

function searchFilteredNotes(note, searchValue) {
	// This function handles search filtered notes,
	// it returns a note if the search value
	// exists in one of the info sections.

	// check note info
	console.log(note.type);
	if (note.info === null) return;
	// check note txt
	if (note.info.txt) {
		// search txt
		if (checkIfIncludes(note.info.txt, searchValue)) return note;
	}

	// check label
	if (note.info.label) {
		if (checkIfIncludes(note.info.label, searchValue)) return note;
	}
	// check Todos
	if (note.info.todos) {
		if (
			note.info.todos.filter((todo) => {
				if (checkIfIncludes(todo.txt, searchValue)) return todo;
			}).length > 0
		) {
			return note;
		}
	}
}

function addNewNote(input, type) {
	let notes = _loadNotesFromStorage();
	let newNote = _createNewNote(input, type);
	notes.unshift(newNote);
	_saveNotesToStorage(notes);
	return Promise.resolve();
}

function duplicateNote(id) {
	const noteData = _getNoteById(id);
	noteData.note.id = utilService.makeId();
	const notes = _loadNotesFromStorage();
	notes.splice(noteData.currIdx, 0, noteData.note);
	_saveNotesToStorage(notes);
}

function updateNote() {
	console.log('hi');
}

// function editNote(editednote) {
// 	console.log(_loadNotesFromStorage());
// 	console.log("trying to delete ", editednote)
// 	deleteNote(editednote.id)
// 	console.log(_loadNotesFromStorage());
// 	addNewNote(editednote);
// 	console.log(_loadNotesFromStorage());
// }

function _getNoteById(noteId) {
	const notes = _loadNotesFromStorage();
	let currIdx;
	let note = notes.find((note, idx) => {
		if (noteId === note.id) {
			currIdx = idx;
		}
		return noteId === note.id;
	});
	return {note, currIdx};
}

function _createNewNote(input, type) {
	console.log(input, type);
	switch (type) {
		case 'note-txt':
			return {
				id: utilService.makeId(),
				type: type,
				isPinned: false,
				info: {txt: input},
				style: {backgroundColor: '#00d'},
			};
		case 'note-img':
			return {
				id: utilService.makeId(),
				type: type,
				isPinned: false,
				info: {
					url: input.url,
					label: input.label,
				},
				style: {backgroundColor: '#00d'},
			};
		case 'note-todos':
			return newTodoNote(input, type);
		case 'note-video':
			return {
				id: utilService.makeId(),
				type: type,
				isPinned: false,
				info: {
					url: input.url,
					label: input.label,
				},
				style: {backgroundColor: '#00d'},
			};
	}
}

function newTodoNote(input, type) {
	const texts = input.list.split(',');
	return {
		id: utilService.makeId(),
		type: type,
		info: {
			label: input.lable,
			todos: texts.map((txt) => {
				return {
					txt,
					doneAt: null,
				};
			}),
		},
		style: {backgroundColor: '#00d'},
	};
}

function deleteNote(noteId) {
	let notes = _loadNotesFromStorage();
	notes = notes.filter((note) => note !== null && note.id !== noteId);
	_saveNotesToStorage(notes);
	return Promise.resolve();
}

function pinnNote(noteId) {
	let notes = _loadNotesFromStorage();
	const {currIdx} = _getNoteById(noteId);
	notes[currIdx].isPinned = !notes[currIdx].isPinned;
	let newNote = notes[currIdx];
	if (newNote.isPinned) {
		notes.splice(currIdx, 1);
		notes.unshift(newNote);
	} else {
		notes.splice(currIdx, 1);
		notes.push(newNote);
	}
	console.log(notes);
	_saveNotesToStorage(notes);
	return Promise.resolve();
}

function _saveNotesToStorage(notes) {
	storageService.saveToStorage(STORAGE_KEY, notes);
}

function _loadNotesFromStorage() {
	return storageService.loadFromStorage(STORAGE_KEY);
}

// function addNewNote(note) {
// 	let notes = _loadNotesFromStorage();
// 	notes.push(note);
// 	_saveNotesToStorage(notes);
// 	return Promise.resolve();
// }
