//  Allow filtering
// • Start with Search and Read / Unread

export class MailFilter extends React.Component {
	state = {
		filterBy: {
			searchVal: '',
			isRead: 'all',
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
		// this.cleanForm();
	};

	cleanForm = () => {
		this.setState({filterBy: {searchVal: '', isRead: null}});
	};

	render() {
		const {searchVal, read} = this.state;
		return (
			<div className='mail-filter-container'>
				<form className='mail-filter' onSubmit={this.onSubmitFilter}>
					<label htmlFor='searchVal'></label>
					<input
						placeholder='Enter title'
						type='text'
						id='searchVal'
						name='searchVal'
						value={searchVal}
						onChange={this.handleChange}
					/>
					<select
						name='isRead'
						id='isRead'
						onChange={this.handleChange}
						value={read}>
						<option value='all'>all</option>
						<option value='read'>read</option>
						<option value='unread'>unread</option>
					</select>
					{/* <label htmlFor='by-max-price'></label>
					<input
						placeholder='Enter maximum price'
						type='number'
						min='0'
						id='by-max-price'
						name='maxPrice'
						value={maxPrice}
						onChange={this.handleChange}
					/> */}
					<button>Filter</button>
				</form>
			</div>
		);
	}
}

//  Filter emails: by search, by read/unread
//  Allow sorting the emails by date and by title
