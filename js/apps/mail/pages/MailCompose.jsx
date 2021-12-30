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
			isDeleted: false,
			sentAt: Date.now(),
			to: '',
			isOpen: false,
		},
	};

	onSendMail = (ev) => {
		ev.preventDefault();
		const {mail} = this.state;
		mailService.addMail(mail);
		this.props.loadMails();
		window.location.replace('/index.html#/mail');
	};

	onDiscardMail = (ev) => {
		ev.preventDefault();
		window.location.replace('/index.html#/mail');
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
							<button
								className='btn trash-btn delete-composed-btn'
								onClick={this.onDiscardMail}>
								Delete
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
