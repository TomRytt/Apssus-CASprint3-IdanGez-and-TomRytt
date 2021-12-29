// Services
import {mailService} from '../apps/mail/services/mailService.js';
import {storageService} from '../../js/services/storage.service.js';

// Pages
import {MailCompose} from '../apps/mail/pages/MailCompose.jsx';
import {MailDetails} from '../apps/mail/pages/MailDetails.jsx';

// Cmps
import {MailFilter} from '../apps/mail/cmps/MailFilter.jsx';
import {MailFolderList} from '../apps/mail/cmps/MailFolderList.jsx';
import {MailList} from '../apps/mail/cmps/MailList.jsx';
// import {MailPreview} from '../apps/mail/cmps/MailPreview.jsx';

const {Route} = ReactRouterDOM;

export class MailApp extends React.Component {
	state = {
		mails: [],
		filterBy: null,
	};

	componentDidUpdate() {
		const mails = storageService.loadFromStorage('mailsDB');
		if (mails.length && mails.length !== this.state.mails.length) {
			this.loadMails();
		}
	}

	openMail = (mailId) => {
		const mails = storageService.loadFromStorage('mailsDB');
		mails.map((mail) => {
			if (mail.id !== mailId) mail.isOpen = false;
			if (mail.id === mailId) {
				mail.isOpen = !mail.isOpen;
				mail.isRead = !mail.isRead;
			}
		});
		this.setState({mails: mails});
		storageService.saveToStorage('mailsDB', mails);
	};

	componentWillUnmount() {
		const {mails} = this.state;
		console.log(mails);
		mails.map((mail) => {
			mail.isOpen = false;
		});
		console.log(mails);
		storageService.saveToStorage('mailsDB', mails);
	}

	componentDidMount() {
		console.log('Im up');
		this.loadMails();
		// const {mails} = this.state;
		// mails.map((mail) => {
		// 	mail.isOpen = false;
		// });
		// console.log(mails);
		// this.setState({mails: mails});
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

	onDeleteMail = (mailId) => {
		mailService.deleteMail(mailId);
	};

	onSetFilter = (filterBy) => {
		this.setState({filterBy}, this.loadMails);
	};

	render() {
		const mailsToShow = this.state.mails;
		return (
			<section className='mail-app-container'>
				{
					<MailFilter
						className='mail-filter'
						filterBy={this.state.filterBy}
						onSetFilter={this.onSetFilter}
					/>
				}
				<Route component={MailCompose} path='/mail/composemail' />
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
