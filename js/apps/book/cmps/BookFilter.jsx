export class BookFilter extends React.Component {
	state = {
		filterBy: {
			name: '',
			minPrice: 0,
			maxPrice: 0,
		},
	};

	handleChange = ({target}) => {
		const field = target.name;
		const value = target.type === 'number' ? +target.value : target.value;
		this.setState(
			(prevState) => ({filterBy: {...prevState.filterBy, [field]: value}}),
			() => {
				this.props.onSetFilter(this.state.filterBy);
			}
		);
	};

	onSubmitFilter = (ev) => {
		ev.preventDefault();
		this.props.onSetFilter(this.state.filterBy);
		this.cleanForm();
	};

	cleanForm = () => {
		this.setState({filterBy: {name: '', minPrice: 0, maxPrice: 0}});
	};

	render() {
		const {title, minPrice, maxPrice} = this.state;
		return (
			<div className='book-filter-container'>
				<form className='book-filter' onSubmit={this.onSubmitFilter}>
					<label htmlFor='by-title'></label>
					<input
						placeholder='Enter title'
						type='text'
						id='by-title'
						name='title'
						value={title}
						onChange={this.handleChange}
					/>
					<label htmlFor='by-min-price'></label>
					<input
						placeholder='Enter minimum price'
						type='number'
						min='0'
						id='by-min-price'
						name='minSpeed'
						value={minPrice}
						onChange={this.handleChange}
					/>
					<label htmlFor='by-max-price'></label>
					<input
						placeholder='Enter maximum price'
						type='number'
						min='0'
						id='by-max-price'
						name='maxPrice'
						value={maxPrice}
						onChange={this.handleChange}
					/>
					<button>Filter</button>
				</form>
			</div>
		);
	}
}
