export function ImgNote({note}) {
    return (
        <div className="image-note">
        <div>{note.info.title}</div>
        <div>{note.info.url}</div>
        </div>
    )
}