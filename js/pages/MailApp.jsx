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
			isStarred: false,
			isHovered: false,
		},
	};

	openMail = (mailId) => {
		const {mails} = this.state;
		mails.map((mail) => {
			if (mail.id !== mailId) mail.isOpen = false;
			if (mail.id === mailId) {
				mail.isOpen = !mail.isOpen;
				mail.isRead = true;
				mail.isHovered = !mail.isHovered;
			}
		});
		this.setState({mails});
	};

	toggleMarked = (mailId) => {
		const {mails} = this.state;
		mails.map((mail) => {
			if (mail.id === mailId) mail.isRead = !mail.isRead;
		});
		this.setState({mails});
	};

	componentWillUnmount() {
		const {mails} = this.state;
		mails.map((mail) => {
			mail.isOpen = false;
		});
		mailService.saveMails(mails);
	}

	componentDidMount() {
		this.loadMails();
	}

	loadMails = () => {
		const {filterBy} = this.state;
		mailService.query(filterBy).then((mails) => {
			mails.map((mail) => {
				mail.isOpen = false;
			});
			this.setState({mails});
		});
	};

	onDeleteMail = (mail) => {
		mailService.deleteMail(mail);
		this.loadMails();
	};

	onSetFilter = (filterBy) => {
		// console.log(filterBy);
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
					toggleMarked={this.toggleMarked}
				/>
			</section>
		);
	}
}
