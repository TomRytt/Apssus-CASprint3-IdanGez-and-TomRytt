export class ImgNote extends React.Component {
    render() {
        const { note } = this.props

        return (
            <div className="image-note">
                <div className="image-note-title">{note.info.title}</div>
                <img className="image-note-img" src={note.info.url} alt="" />
                <button onClick={() => this.props.onDeleteNote(note.id)}>Delete Note</button>
            </div>
        )
    }
}
