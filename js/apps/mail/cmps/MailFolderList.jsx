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
					<span>➕</span> <span className='compose-span'>Compose</span>
				</button>
			</Link>
			<span
				className=' mail-folder-list-fa fas fa-inbox'
				onClick={() => onSetFilter({status: 'inbox'})}>
				<span className='mail-folder-list-text-span'>Inbox</span>
			</span>
			<span
				className='fas fa-star mail-folder-list-fa'
				onClick={() => onSetFilter({isStarred: 'true'})}>
				<span className='mail-folder-list-text-span'>Starred</span>
			</span>
			<span
				className=' mail-folder-list-fa fas fa-paper-plane'
				onClick={() => onSetFilter({status: 'sent'})}>
				<span className='mail-folder-list-text-span'>Sent</span>
			</span>
			<span
				className='fas fa-trash mail-folder-list-fa'
				onClick={() => onSetFilter({status: 'trash'})}>
				<span className='mail-folder-list-text-span'>Deleted</span>
			</span>
			{/* <button onClick={() => onSetFilter({status: 'draft'})}>Draft</button> */}
			<label>
				<meter
					className='unread-meter'
					max='100'
					value={`${updateUnreadMeter()}`}></meter>
				<span className='meter-text'>
					{`Unread:${updateUnreadMeter().toFixed(2)}`}%
				</span>
			</label>
		</div>
	);
}

// Fix the number in the draft
