import {eventBusService} from '../services/eventBusService.js';

export class UserMsg extends React.Component {
	state = {
		msg: null,
	};

	removeEventBus = null;
	timeoutId = null;

	componentDidMount() {
		this.removeEventBus = eventBusService.on('user-msg', (msg) => {
			clearTimeout(this.timeoutId);
			this.setState({msg}, this.onAutoClose);
		});
		// console.log('mounted');
	}

	onAutoClose = () => {
		// console.log('onAutoClose');
		this.timeoutId = setTimeout(() => {
			this.onCloseMsg();
		}, 3000);
	};

	onCloseMsg = () => {
		// console.log('onCloseMsg');
		clearTimeout(this.timeoutId);
		this.setState({msg: null});
	};

	componentWillUnmount() {
		// console.log('componentWillUnmount');
		this.removeEventBus();
	}

	render() {
		const {msg} = this.state;
		if (!msg) return <React.Fragment></React.Fragment>;
		return (
			<div className={`user-msg ${msg.type}`}>
				<button onClick={this.onCloseMsg}>x</button>
				<h2>{msg.txt}</h2>
				<a href={`/#/book/${msg.link}`}>Check it Out</a>
			</div>
		);
	}
}
