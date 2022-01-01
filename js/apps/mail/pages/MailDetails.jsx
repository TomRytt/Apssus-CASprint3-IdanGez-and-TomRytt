//  Routable component (page)
// • show the entire email
// • Allow deleting an email (using the service)
// • Allow navigating back to list

import {mailService} from '../services/mailService.js';
import {Loader} from '../../../cmps/Loader.jsx';

const {Link} = ReactRouterDOM;

export class MailDetails extends React.Component {
	state = {
		mail: null,
	};

	componentDidMount() {
		this.loadmail();
	}

	loadmail = () => {
		const {mailId} = this.props.match.params;
		mailService.getMailById(mailId).then((mail) => {
			if (!mail) return this.props.history.push('/mail');
			this.setState({mail});
			return mail;
		});
	};

	render() {
		const {mail} = this.state;
		if (!mail) return <Loader />;
		return (
			<div>
				<Link className='go-back-container' to='/mail' />
				<article className='mail-details-container'>
					<header className='mail-details-header'>
						<h1>{mail.subject}</h1>
						<div>
							<span className='mail-sender-span'>
								<b>{mail.by}</b>
								<span className='mail-from-span'>{mail.from}</span>
							</span>
						</div>
						<nav className='mail-details-nav'>
							<Link to='/mail'>
								<i className='btn fas fa-compress mail-detaiils-btn'></i>
							</Link>
							<i className='btn fas fa-paper-plane send-to-keep-btn mail-detaiils-btn'></i>
							<i className='btn fas fa-trash mail-detaiils-btn'></i>
						</nav>
					</header>
					<div className='mail-details-body'>
						<p>{mail.body}</p>
					</div>
				</article>
			</div>
		);
	}
}
