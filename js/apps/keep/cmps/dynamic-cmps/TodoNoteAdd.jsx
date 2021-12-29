export function TodoNoteAdd() {
    return (
        <form className="note-add" >
            <label htmlFor="book-name">Enter coma seperated list</label>
            <input
                type="text"
                id="note-add"
                name="note-add"
            />
            <button>Add List</button>
        </form>
    )
}

