import {LongText} from '../cmps/LongText.jsx';
import {utilService} from '../../../services/util.service.js';
import {bookService} from '../services/bookService.js';
import {ReviewAdd} from '../cmps/ReviewAdd.jsx';

const {Link} = ReactRouterDOM;

export class BookDetails extends React.Component {
	state = {
		book: null,
	};

	componentDidMount() {
		this.loadBook();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
			this.loadBook();
		}
	}

	getBookLength = (bookPages) => {
		if (bookPages > 500) return 'Long Reading';
		else if (bookPages < 500 && bookPages > 200) return 'Decent Reading';
		else if (bookPages < 100) return 'Light Reading';
	};

	bookAge = (bookPublicationDate) => {
		const d = new Date();
		let year = d.getFullYear();
		if (year - bookPublicationDate <= 1) return 'New!';
		else if (year - bookPublicationDate > 10) return 'Veteran Book!';
	};

	bookPriceColor = (bookPrice) => {
		if (bookPrice < 20) return 'low';
		else if (bookPrice > 150) return 'high';
	};

	loadBook = () => {
		const {bookId} = this.props.match.params;
		bookService.getbookById(bookId).then((book) => {
			if (!book) return this.props.history.push('/');
			this.setState({book});
			return book;
		});
	};

	onDeleteReview = (idx) => {
		const books = bookService._loadFromStorage();
		const book = {...this.state.book};
		const newBook = books.find(
			(bookFromStorage) => bookFromStorage.id === book.id
		);
		newBook.reviews.splice(idx, 1);
		book.reviews.splice(idx, 1);
		this.setState({book});
		bookService._saveToStorage(books);
	};

	displayStars = (stars) => {
		return [...Array(5)].map((star, idx) => (
			<span key={idx} className={'star' + (idx < stars ? 'on' : 'off')}>
				&#9733;
			</span>
		));
	};

	render() {
		const {book} = this.state;
		if (!book) return <div>Loading</div>;
		return (
			<article className='book-details'>
				<h2>Title: {book.title}</h2>
				<img src={`${book.thumbnail}`} alt='' />
				<br></br>
				<img
					src={book.listPrice.isOnSale ? 'assets/imgs/on-sale.png' : ''}></img>
				<h4>Authors: {book.authors.map((author) => `${author}`)}</h4>
				<h4>Details: {book.subtitle}</h4>
				<h4>
					Publish Date: {book.publishedDate} -{' '}
					{this.bookAge(book.publishedDate)}
				</h4>
				<LongText text={book.description} />
				<h4>
					Pages: {book.pageCount} - {this.getBookLength(book.pageCount)}
				</h4>
				<h4>Categories: {book.categories.map((category) => `${category} `)}</h4>
				<h4>Langugae: {book.language}</h4>
				<h4>ID: {book.id}</h4>
				<h4 className={`${this.bookPriceColor(book.listPrice.amount)}`}>
					Price: {book.listPrice.amount}
					{utilService.currencySymbolConverter(book)}
				</h4>
				{book.reviews ? (
					<div className='reviews-container'>
						Reviews:
						<br></br>
						{book.reviews.map((review, idx) => (
							<div className={`review-${idx + 1}-container`} key={idx}>
								<span>
									<span className='review-name-span'>{review.name}</span>
								</span>
								<p className='review-rating-paragraph'>
									{this.displayStars(review.rating)}
								</p>
								<span className='review-date-span'>{review.date}</span>
								<span className='review-text-area'>{review.text}</span>
								<button onClick={() => this.onDeleteReview(idx)}>x</button>
							</div>
						))}
					</div>
				) : (
					'No reviews yet'
				)}
				<ReviewAdd book={book} loadBook={this.loadBook} />
			</article>
		);
	}
}
