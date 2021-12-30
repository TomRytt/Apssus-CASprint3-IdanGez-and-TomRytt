export class VideoNoteAdd extends React.Component {

    state = {
        url: '',
        type: 'note-video'
    }

    handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({ ...prevState, url: value }));
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const { url, type } = this.state;
        this.props.onAddNote(url, type)
        this.setState({ url: '' });


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
                    <button>Add Video</button>
                </form>
            </div>
        )
    }
}

