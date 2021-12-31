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
			<button onClick={() => onSetFilter({status: 'inbox'})}>Inbox</button>
			<button onClick={() => onSetFilter({isStarred: 'true'})}>Starred</button>
			<button onClick={() => onSetFilter({status: 'sent'})}>Sent Mail</button>
			<button onClick={() => onSetFilter({status: 'trash'})}>Deleted</button>
			<button onClick={() => onSetFilter({status: 'draft'})}>Draft</button>
			<label>
				<meter
					className='unread-meter'
					max='100'
					value={`${updateUnreadMeter()}`}></meter>
				<span>{`${updateUnreadMeter().toFixed(2)}`}%</span>
			</label>
		</div>
	);
}

// Fix the number in the draft
