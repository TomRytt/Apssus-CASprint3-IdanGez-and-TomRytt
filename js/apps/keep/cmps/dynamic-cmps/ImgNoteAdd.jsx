export class ImgNoteAdd extends React.Component {

    state = {
        image: {
            url: '',
            label: '',
        },
        type: 'note-img'
    }

    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({
            image: { ...prevState.image, [field]: value },
        }));
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const { image, type } = this.state;
        this.props.onAddNote(image, type)
        this.setState({ url: '', label: '', });

    };


    render() {
        const { url, label } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-img-add">Enter Image URL</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-img-add"
                        name="url"
                        value={url}
                    />
                    <label htmlFor="note-img-label">label</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-img-label"
                        name="label"
                        value={label}
                    />
                    <button className="note-add-button">Add Note</button>
                </form>
            </div>
        )
    }
}



