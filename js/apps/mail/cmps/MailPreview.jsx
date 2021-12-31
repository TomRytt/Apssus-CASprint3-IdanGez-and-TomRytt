// import {utilService} from '../../../services/util.service.js';
import {LongText} from '../../../cmps/LongText.jsx';

const {Link} = ReactRouterDOM;

export function MailPreview({
	mail,
	openMail,
	onDeleteMail,
	toggleRead,
	onToggleStarred,
}) {
	return (
		<article className='mail-preview'>
			<span
				onClick={() => onToggleStarred(mail.id)}
				className={`'star' + ${mail.isStarred ? 'on' : 'off'}`}>
				&#9733;
			</span>
			{!mail.isOpen ? (
				<header className={mail.isRead ? 'read' : 'unread'}>
					<div className='mail-header-text' onClick={() => openMail(mail.id)}>
						<span className='mail-header-by'>{mail.by}</span>
						<span>{mail.subject}</span>
						<LongText text={mail.body} className='mail-header-body' />
						<span className='mail-sentat'>{mail.sentAt}</span>
					</div>
					<span className='mail-hover-actions'>
						<button
							className={
								mail.isRead ? 'far fa-envelope' : 'far fa-envelope-open'
							}
							onClick={() => toggleRead(mail.id)}></button>
						<button
							className='fas fa-trash'
							onClick={() => onDeleteMail(mail.id)}></button>
					</span>
				</header>
			) : (
				<article className='mail-body' onClick={() => openMail(mail.id)}>
					<h2>{mail.subject}</h2>
					<span className='mail-hover-actions'>
						<button
							className='fas fa-trash'
							onClick={() => onDeleteMail(mail.id)}></button>
						<Link className={'clean-link'} to={`/mail/${mail.id}`}>
							<button className='fas fa-expand'></button>
						</Link>
					</span>
					<p>
						<b>{mail.by} </b>
						<span> {`<${mail.from}>`}</span>
					</p>
					<p>{mail.body}</p>
				</article>
			)}
		</article>
	);
}

// To do:
// 1. add the trash and expand symbols
// 2. add click to expand and an expand button (when expanded) that leads to a nested route to the details page
// 3. add styling
// 4. add a time/date at the top right of each mail
// 5. add staring a mail
// 6. Support hover state
