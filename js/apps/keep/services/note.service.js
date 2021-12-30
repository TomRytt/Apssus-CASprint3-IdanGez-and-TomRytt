import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'
export const noteService = {
  query,
  // addTxtNote,
  // addImgNote,
  // addTodoNote,
  addNewNote,
  tester
}

const STORAGE_KEY = 'notesDB'
const gNotes = [
  { id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" } },
  { id: "n102", type: "note-img", info: { url: "https://images.unsplash.com/photo-1599302592205-d7d683c83eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8&w=1000&q=80", title: "Bobi and Me" }, style: { backgroundColor: "#00d" } },
  { id: "n103", type: "note-todos", info: { label: "Get my stuff together", todos: [{ txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 }] } },
  { id: "n104", type: "note-video", isPinned: true, info: { url: "https://www.youtube.com/embed/LHAgUebnlXI" } },
  { id: "n105", type: "note-video", isPinned: true, info: { url: "https://www.youtube.com/embed/o6SprGmHTy4" } },
];


function _createNotes() {
  let notes = _loadNotesFromStorage();
  if (!notes || !notes.length) {
    notes = gNotes;
  }
  _saveNotesToStorage(notes)
}
_createNotes()

function query() {
  const notes = _loadNotesFromStorage()
  // console.log(notes)
  // if(!filterBy) return Promise.resolve(notes);
  // const filteredNotes = _get 
  return notes
}

function tester() {
  console.log('test')
}

function addNewNote(input, type) {
  let notes = _loadNotesFromStorage()
  let newNote = _createNewNote(input, type)
  notes.unshift(newNote);
  _saveNotesToStorage(notes)
  return Promise.resolve()
}

function _createNewNote(input, type) {
  switch (type) {
    case 'note-txt':
      return {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        info: { txt: input }
      }
    case 'note-img':
      return {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        info: {
          url: input.url,
          title: input.title
        }
      }
    case 'note-todos':
      return newTodoNote(input, type)
    case 'note-video':
      return {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        info: { url: input }
      }
  }
}

function newTodoNote(input, type) {
  const texts = input.list.split(',')
  return {
    id: utilService.makeId(),
    type: type,
    info: {
      label: input.lable,
      todos: texts.map(txt => {
        return {
          txt,
          doneAt: null
        }
      })
    }
  }
}

    // todos: texts.map(txt => ({txt, dontAt:null}))

function _saveNotesToStorage(notes) {
  storageService.saveToStorage(STORAGE_KEY, notes);
}

function _loadNotesFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY);
}