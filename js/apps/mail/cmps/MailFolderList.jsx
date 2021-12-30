const {Link} = ReactRouterDOM;

export function MailFolderList({mails, onSetFilter}) {
	function updateUnreadMeter() {
		let unReadCount = 0;
		mails.map((mail) => {
			if (!mail.isRead) unReadCount++;
		});
		let percent = (unReadCount / mails.length) * 100;
		return percent;
	}

	return (
		<div className='mail-folder-list-container'>
			<Link className='primary-btn clean-link' to='/mail/composemail'>
				<button>Compose Mail</button>
			</Link>
			<button onClick={() => onSetFilter({searchVal: '', isRead: 'all'})}>
				Inbox
			</button>
			<button onClick={() => onSetFilter({isStrred: true})}>Starred</button>
			<button onClick={() => onSetFilter({isSent: true})}>Sent Mail</button>
			<button onClick={() => onSetFilter({isDelted: true})}>Deleted</button>
			<button onClick={() => onSetFilter({isDraft: true})}>Draft</button>
			<label>
				<meter
					className='unread-meter'
					max='100'
					value={`${updateUnreadMeter()}`}></meter>
			</label>
		</div>
	);
}

// Add Compose button in this component as a prop here
//  Allow filtering by different folders: inbox / sent / trash/ draft
//  Allow viewing the sent emails
