export function VideoNoteAdd() {
    return (
        <form className="note-add" >
            <label htmlFor="book-name">Enter Video URL</label>
            <input
                type="text"
                id="note-add"
                name="note-add"
            />
            <button>Add Video</button>
        </form>
    )
}
