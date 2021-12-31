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
				<button className='btn mail-folder-list-compose-btn'>
					Compose Mail
				</button>
			</Link>
			<span
				className=' mail-folder-list-fa fas fa-inbox'
				onClick={() => onSetFilter({status: 'inbox'})}>
				<span>Inbox</span>
			</span>
			<span
				className='fas fa-star mail-folder-list-fa'
				onClick={() => onSetFilter({isStarred: 'true'})}>
				<span>Starred</span>
			</span>
			<span
				className=' mail-folder-list-fa fas fa-paper-plane'
				onClick={() => onSetFilter({status: 'sent'})}>
				<span>Sent</span>
			</span>
			<button
				className='btn mail-folder-list-btn'
				onClick={() => onSetFilter({status: 'trash'})}>
				Deleted
			</button>
			{/* <button onClick={() => onSetFilter({status: 'draft'})}>Draft</button> */}
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
