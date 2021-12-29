export function ImgNote({ note }) {
    return (
        <div className="image-note">
            <div>{note.info.title}</div>
            <img src={note.info.url} alt="" />
        </div>
    )
}