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

export class MailApp extends React.Component {
	state = {
		mails: [],
		filterBy: null,
	};

	componentDidMount() {
		this.loadMails();
	}

	loadMails = () => {
		const {filterBy} = this.state;
		mailService.query(filterBy).then((mails) => {
			this.setState({mails});
		});
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
				<MailList className='mail-list' mails={mailsToShow} />
			</section>
		);
	}
}
