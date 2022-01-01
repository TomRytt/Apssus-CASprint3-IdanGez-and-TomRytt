export class TextNoteAdd extends React.Component {
	state = {
		input: '',
		type: 'note-txt',
	};

	handleChange = ({target}) => {
		const value = target.type === 'number' ? +target.value : target.value;
		this.setState((prevState) => ({...prevState, input: value}));
	};

	onSubmitNote = (ev) => {
		ev.preventDefault();
		const {input, type} = this.state;
		this.props.onAddNote(input, type);
		this.setState({input: ''});
	};

	render() {
		const {input} = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmitNote} action=''>
					<label htmlFor='add-text-note'>Add note:</label>
					<input
						type='text'
						onChange={this.handleChange}
						id='add-text-note'
						name='input'
						value={input}
					/>
					<button className='note-add-button'>Add Note</button>
				</form>
			</div>
		);
	}
}
