
export function ColorInput({ onChangeNoteColor, note }) {

    return (
        <div className="color-input">
            <label htmlFor={note.id}>
                <img className="color-input-img"
                    src="./assets/imgs/keep-app/paint-board-and-brush.png"
                    alt="" />
            </label>
            <input className="color-editor-input"
                type="color"
                name="color-editor"
                id={note.id}
                onChange={onChangeNoteColor} />
        </div>
    )
}

