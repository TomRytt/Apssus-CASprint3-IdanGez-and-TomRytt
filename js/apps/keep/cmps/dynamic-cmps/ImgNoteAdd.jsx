export function ImgNoteAdd() {
    return (
        <form className="note-add" >
            <label htmlFor="book-name">Enter Image URL</label>
            <input
                type="text"
                id="note-add"
                name="note-add"
            />
            <button>Add Image</button>
        </form>
    )
}

