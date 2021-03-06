// Services
import {bookService} from '../services/bookService.js';
import {eventBusService} from '../services/eventBusService.js';

// Cmps
import {BookList} from '../cmps/BookList.jsx';
import {BookFilter} from '../cmps/BookFilter.jsx';
import {AddBook} from '../cmps/AddBook.jsx';

export class BookApp extends React.Component {
	state = {
		books: [],
		filterBy: null,
	};

	componentDidMount() {
		this.loadBooks();
	}

	loadBooks = () => {
		const {filterBy} = this.state;
		bookService.query(filterBy).then((books) => {
			this.setState({books});
		});
	};

	onSetFilter = (filterBy) => {
		this.setState({filterBy}, this.loadBooks);
	};

	onAddBook = (book) => {
		bookService.addBook(book).then(() => {
			eventBusService.emit('user-msg', {
				txt: `success! your purchase of ${book.volumeInfo.title} has been confirmed!'`,
				type: 'success',
				link: `${book.id}`,
			});
			this.loadBooks();
		});
	};

	onRemoveCar = () => {
		const {id} = this.state.car;
		carService.removeCar(id).then(() => {
			eventBusService.emit('user-msg', {
				txt: 'Car is deleted !',
				type: 'danger',
			});
			this.onGoBack();
		});
	};

	render() {
		const booksToShow = this.state.books;
		return (
			<section>
				<AddBook loadBooks={this.loadBooks} onAddBook={this.onAddBook} />
				{
					<BookFilter
						className='book-filter'
						filterBy={this.state.filterBy}
						onSetFilter={this.onSetFilter}
					/>
				}
				<BookList className='book-list' books={booksToShow} />
			</section>
		);
	}
}
