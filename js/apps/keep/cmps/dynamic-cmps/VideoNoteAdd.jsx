export class VideoNoteAdd extends React.Component {

    state = {
        video: {
            url: '',
            label: '',
        },
        type: 'note-video'
    }

    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({
            video: { ...prevState.video, [field]: value },
        }));
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const { video, type } = this.state;
        this.props.onAddNote(video, type)
        this.setState({ url: '', label: '', });

    };


    render() {
        const { url, label } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-video-add">Enter Video URL:</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-video-add"
                        name="url"
                        value={url}
                    />
                    <label htmlFor="note-video-label">Label:</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-video-label"
                        name="label"
                        value={label}
                    />
                    <button className="note-add-button">Add Note</button>
                </form>
            </div>
        )
    }
}

