import { noteService } from '../../services/note.service.js'
export class ImgNoteAdd extends React.Component {

    state = {
        image: {
            url: '',
            title: '',
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
        const {image,type} = this.state;
        this.props.onAddNote(image, type)
        this.setState({ url: '' , title:'',});

    };


    render() {
        const { url, title } = this.state;
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
                    <label htmlFor="note-img-title">Title</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-img-title"
                        name="title"
                        value={title}
                    />
                    <button>Add Image</button>
                </form>
            </div>
        )
    }
}



