export class LongText extends React.Component {
	state = {
		text: '',
		isLongTxtShown: false,
	};

	componentDidMount() {
		this.showText();
	}

	showText = () => {
		var fullText = this.props.text;
		if (fullText.length < 100) {
			this.setState({text: fullText});
		} else {
			this.setState({text: fullText.slice(0, 100)});
		}
	};

	showLongTxt = (ev) => {
		var fullText = this.props.text;
		let {isLongTxtShown} = this.state;
		if (isLongTxtShown) {
			this.setState({
				text: fullText.slice(0, 100),
				isLongTxtShown: false,
			});
			ev.target.innerText = '  More..';
		} else if (!isLongTxtShown) {
			this.setState({
				text: fullText,
				isLongTxtShown: true,
			});
			ev.target.innerText = '  Less..';
		}
	};

	render() {
		return (
			<span>
				{this.state.text}
				{this.props.text.length > 50 && (
					<span className='more' onClick={this.showLongTxt}>
						...
					</span>
				)}
			</span>
		);
	}
}
