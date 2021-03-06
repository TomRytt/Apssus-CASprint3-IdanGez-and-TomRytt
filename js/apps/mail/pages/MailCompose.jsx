import {mailService} from '../services/mailService.js';

const {Link} = ReactRouterDOM;
export class MailCompose extends React.Component {
	state = {
		mail: {
			id: mailService.getNewMailId(),
			status: 'sent',
			by: 'User',
			from: 'user@appsus.com',
			subject: '',
			body: '',
			isRead: false,
			isStarred: false,
			sentAt: '',
			to: '',
			isOpen: false,
			isHovered: false,
		},
	};

	getCurrTime = () => {
		let currTime = new Date();
		let month = currTime.toLocaleString('default', {month: 'long'});
		let day = currTime.getDate();
		let hours = currTime.getHours();
		let minutes = currTime.getMinutes();
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		return `${month} ${day}   ${hours}:${minutes} `;
	};

	onSendMail = (ev) => {
		ev.preventDefault();
		const {mail} = this.state;
		mail.sentAt = this.getCurrTime();
		mailService.addMail(mail);
		this.props.loadMails();
		window.location.replace('#/mail');
	};

	onDiscardMail = (ev) => {
		ev.preventDefault();
		window.location.replace('#/mail');
	};

	handleChange = (event) => {
		const target = event.target;
		const field = target.name;
		const value = target.type === 'number' ? +target.value : target.value;
		this.setState((prevState) => ({
			mail: {...prevState.mail, [field]: value},
		}));
	};

	render() {
		return (
			<div>
				<Link className='go-back-container' to='/mail/' />
				<div className='compose-mail-container'>
					<header>
						<h1>New Message</h1>
					</header>
					<form id='compose-mail-form'>
						<input
							type='text'
							id='to'
							name='to'
							placeholder='To'
							onChange={this.handleChange}
						/>
						<input
							type='text'
							id='subject'
							name='subject'
							placeholder='Subject'
							onChange={this.handleChange}
						/>
						<textarea
							id='body'
							name='body'
							onChange={this.handleChange}></textarea>
						<div className='compose-action-bar'>
							<button
								onClick={this.onSendMail}
								className='btn btn-primary send-mail-btn'>
								Send
							</button>
							<i
								className='btn fas fa-trash btn delete-composed-btn'
								onClick={this.onDiscardMail}></i>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
