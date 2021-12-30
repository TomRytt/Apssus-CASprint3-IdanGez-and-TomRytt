export class VideoNote extends React.Component {

    render() {
        const { note } = this.props
        return (
            <div className="video-note">
                <iframe width="420" height="315"
                    src={note.info.url}>
                </iframe>
                <button onClick={() => this.props.onDeleteNote(note.id)}>Delete Note</button>
            </div>
        )
    }
}