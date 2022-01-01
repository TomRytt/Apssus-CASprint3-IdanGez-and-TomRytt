import {bookService} from '../services/bookService.js';

export class AddBook extends React.Component {
	state = {
		searchValue: '',
		bookList: '',
	};

	handleChange = ({target}) => {
		const value = target.value;
		this.setState((prevState) => ({...prevState, searchValue: value}));
	};

	searchBook = (ev) => {
		const {searchValue} = this.state;
		ev.preventDefault();
		bookService.GetBookFromGoogle(searchValue).then(this.getBookList);
	};

	getBookList = (bookList) => {
		this.setState((prevState) => ({...prevState, bookList}));
	};

	render() {
		const {searchValue, bookList} = this.state;
		return (
			<div className='add-book-container'>
				<form onSubmit={this.searchBook}>
					<input
						value={searchValue}
						type='text'
						id='book-search'
						onChange={this.handleChange}
					/>
					<button>Search new book</button>
				</form>
				{bookList ? (
					<div>
						<ul className='book-list'>
							{bookList.items.map((book, idx) => {
								return (
									<li className='book-list-item' key={idx}>
										{book.volumeInfo.title}
										<button onClick={() => this.props.onAddBook(book)}>
											+
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}
