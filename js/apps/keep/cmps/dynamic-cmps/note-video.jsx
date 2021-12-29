export function VideoNote({ note }) {
    return (
        <div className="video-note">

            <iframe width="420" height="315"
                src={note.info.url}>
            </iframe>
        </div>
    )
}