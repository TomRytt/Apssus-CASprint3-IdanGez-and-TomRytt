import {bookService} from '../services/bookService.js';
import {StarRating} from './StarRating.jsx';

export class ReviewAdd extends React.Component {
	state = {
		review: {
			name: 'Anonymous',
			rating: 0,
			date: new Date().toISOString().split('T')[0],
			text: '',
		},
	};

	inputRef = React.createRef();

	componentDidMount() {
		this.inputRef.current.focus();
	}

	handleChange = ({target}) => {
		const field = target.name;
		const value = target.type === 'number' ? +target.value : target.value;
		this.setState((prevState) => ({
			review: {...prevState.review, [field]: value},
		}));
	};

	onSubmitReview = (ev) => {
		ev.preventDefault();
		const {review} = this.state;
		const {book} = this.props;
		const bookId = book.id;
		bookService.addReview(bookId, review);
		this.props.loadBook(bookId);
	};

	render() {
		const {rating} = this.state.review;
		return (
			<div className='review-add-container'>
				<h4>Review this book:</h4>
				<form onSubmit={this.onSubmitReview} id='review-form'>
					<label>
						Your Name:
						<input
							ref={this.inputRef}
							type='text'
							id='name'
							name='name'
							placeholder='Enter full name'
							onChange={this.handleChange}></input>
					</label>
					<StarRating handleChange={this.handleChange} />
					<label>
						Read At:
						<input
							id='date'
							name='date'
							type='date'
							value={this.state.review.date}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Add review:
						<textarea
							id='text'
							name='text'
							onChange={this.handleChange}></textarea>
					</label>
					<button>Save Review</button>
				</form>
			</div>
		);
	}
}
