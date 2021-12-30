export class TextNote extends React.Component {

    render() {
        const { note } = this.props
        return (
            <div className="text-note">
                {note.info.txt}
                <button onClick={() => this.props.onDeleteNote(note.id)}>Delete Note</button>
            </div>
        )

    }
}

