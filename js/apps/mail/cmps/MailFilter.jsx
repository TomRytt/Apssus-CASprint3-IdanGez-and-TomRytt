export class MailFilter extends React.Component {
	state = {
		filterBy: {
			status: null,
			searchVal: '',
			isRead: 'all',
			isStarred: null,
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

	cleanForm = () => {
		this.setState({filterBy: {searchVal: '', isRead: null}});
	};

	render() {
		const {searchVal, read} = this.state;
		return (
			<div className='mail-filter-container'>
				<h1>Mister Mail</h1>
				<form className='mail-filter'>
					<label htmlFor='searchVal'></label>
					<input
						placeholder='Search mail'
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
				</form>
			</div>
		);
	}
}
