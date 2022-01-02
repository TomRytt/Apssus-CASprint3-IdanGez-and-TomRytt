// Services
import {bookService} from '../apps/book/services/bookService.js';
import {eventBusService} from '../services/eventBusService.js';

// Cmps
import {BookList} from '../apps/book/cmps/BookList.jsx';
import {BookFilter} from '../apps/book/cmps/BookFilter.jsx';
import {AddBook} from '../apps/book/cmps/AddBook.jsx';

// Pages
import {BookDetails} from '../apps/book/pages/BookDetails.jsx';

const {Route} = ReactRouterDOM;
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
				<Route component={BookDetails} path='/books/:bookId' />
				<BookList className='book-list' books={booksToShow} />
			</section>
		);
	}
}
