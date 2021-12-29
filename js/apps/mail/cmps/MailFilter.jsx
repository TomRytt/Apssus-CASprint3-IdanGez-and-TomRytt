export class MailFilter extends React.Component {
	state = {
		filterBy: {
			searchVal: '',
			read: null,
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
		this.setState({filterBy: {searchVal: '', read: null}});
	};

	render() {
		return <h1>MailFilter</h1>;
	}
}
