// Services
import {mailService} from '../apps/mail/services/mailService.js';

// Pages
import {MailCompose} from '../apps/mail/pages/MailCompose.jsx';
import {MailDetails} from '../apps/mail/pages/MailDetails.jsx';

// Cmps
import {MailFilter} from '../apps/mail/cmps/MailFilter.jsx';
import {MailFolderList} from '../apps/mail/cmps/MailFolderList.jsx';
import {MailList} from '../apps/mail/cmps/MailList.jsx';
// import {MailPreview} from '../apps/mail/cmps/MailPreview.jsx';

const {Route, Switch} = ReactRouterDOM;

export class MailApp extends React.Component {
	state = {
		mails: [],
		filterBy: {
			status: null,
			searchVal: '',
			isRead: 'all',
			isStarred: null,
		},
	};

	openMail = (mailId) => {
		const {mails} = this.state;
		mails.map((mail) => {
			if (mail.id !== mailId) mail.isOpen = false;
			if (mail.id === mailId) {
				mail.isOpen = !mail.isOpen;
				mail.isRead = true;
			}
		});
		this.setState({mails});
	};

	componentWillUnmount() {
		const {mails} = this.state;
		console.log(mails);
		mails.map((mail) => {
			mail.isOpen = false;
		});
		console.log(mails);
		mailService.saveMails(mails);
	}

	componentDidMount() {
		console.log('Im up');
		this.loadMails();
	}

	loadMails = () => {
		console.log('in load mails');
		const {filterBy} = this.state;
		mailService.query(filterBy).then((mails) => {
			mails.map((mail) => {
				mail.isOpen = false;
			});
			this.setState({mails});
		});
	};

	onDeleteMail = (mail) => {
		const mails = this.state;
		console.log(mail);
		mailService.deleteMail(mail);
		this.setState({mails});
		this.loadMails();
	};

	onSetFilter = (filterBy) => {
		this.setState({filterBy}, this.loadMails);
	};

	render() {
		const mailsToShow = this.state.mails;
		return (
			<section className='mail-app-container'>
				<MailFilter
					className='mail-filter'
					filterBy={this.state.filterBy}
					onSetFilter={this.onSetFilter}
				/>

				<MailFolderList
					className='mail-folder-list'
					filterBy={this.state.filterBy}
					onSetFilter={this.onSetFilter}
					mails={mailsToShow}
				/>
				<Switch>
					<Route
						component={() => <MailCompose loadMails={this.loadMails} />}
						path='/mail/composemail'
					/>
					<Route component={MailDetails} path='/mail/:mailId' />
				</Switch>
				<MailList
					className='mail-list'
					mails={mailsToShow}
					openMail={this.openMail}
					onDeleteMail={this.onDeleteMail}
				/>
			</section>
		);
	}
}
