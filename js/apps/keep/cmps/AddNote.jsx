import { DynamicTodoAdd } from './dynamic-cmps/dynamicTodoAdd.jsx'


export class AddNote extends React.Component {

    state = {
        type: 'text'
    }

    handleChange = (ev) => {
        const value = ev.target.value;
        this.setState((prevState) => ({ ...prevState, type: value }))
    }

    // onAddNote = (book) => {
    //     bookService.addBook(book).then(() => {
    //         eventBusService.emit('user-msg',
    //          { txt: `Book ${book.volumeInfo.title} was successfully added !`,
    //          type: 'success',
    //           link:`${book.id}`})
    //         this.props.loadBooks()
    //     })
    // }

    render() {
        const { type } = this.state
        // console.log(type)
        return (
            <div>
                <form className="note-add" >
                    <label htmlFor="book-name">What's on your mind?</label>
                    <input
                        type="text"
                        id="note-add"
                        name="note-add"
                    />
                    <DynamicTodoAdd type={type} />
                    <button value="text" onClick={this.handleChange}>Note</button>
                    <button value="img" onClick={this.handleChange}>Image</button>
                    <button value="todos" onClick={this.handleChange}>Todos</button>
                    <button value="video" onClick={this.handleChange}>Video</button>

                </form>
            </div>
        )
    }
}