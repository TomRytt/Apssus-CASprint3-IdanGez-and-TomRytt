export function ImgNote({ note }) {
    return (
        <div className="image-note">
            <div className="image-note-title">{note.info.title}</div>
            <img className="image-note-img" src={note.info.url} alt="" />
        </div>
    )
}