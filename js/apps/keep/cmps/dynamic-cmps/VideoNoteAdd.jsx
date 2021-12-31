export class VideoNoteAdd extends React.Component {

    state = {
        video: {
            url: '',
            title: '',
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
        this.setState({ url: '', title: '', });

    };


    render() {
        const { url, title } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-video-add">Enter Video URL</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-video-add"
                        name="url"
                        value={url}
                    />
                    <label htmlFor="note-video-title">Title</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-video-title"
                        name="title"
                        value={title}
                    />
                    <button>Add Video</button>
                </form>
            </div>
        )
    }
}

