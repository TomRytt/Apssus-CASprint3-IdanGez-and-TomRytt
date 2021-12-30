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
						<b>{mail.by}</b>
						<span>{mail.from}</span>
						<nav className='mail-details-nav'>
							<Link to='/mail'>
								<button className='btn shrink-btn mail-detaiils-btn'>
									Shrink
								</button>
							</Link>
							<button className='btn send-to-keep-btn mail-detaiils-btn'>
								Keep
							</button>
							<button className='btn trash-btn mail-detaiils-btn'>Trash</button>
						</nav>
					</header>
					<div className='mail-details-body'>
						<p>{mail.body}</p>
					</div>
				</article>
				;
			</div>
		);
	}
}
