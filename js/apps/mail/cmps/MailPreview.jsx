// import {utilService} from '../../../services/util.service.js';
import {LongText} from '../../../cmps/LongText.jsx';

const {Link} = ReactRouterDOM;

export function MailPreview({mail, openMail, onDeleteMail, toggleMarked}) {
	return (
		<article className='mail-preview'>
			{!mail.isOpen ? (
				<header
					className={mail.isRead ? 'mail-preview-read' : 'mail-preview-unread'}>
					<div onClick={() => openMail(mail.id)}>
						<p className='mail-header-by'>{mail.by}</p>
						<p>{mail.subject}</p>
						<span>12:40</span>
						<LongText text={mail.body} className='mail-header-preview' />
					</div>
					<span className='mail-hover-actions'>
						<button onClick={() => toggleMarked(mail.id)}>Read/Unread</button>
						<button onClick={() => onDeleteMail(mail.id)}>Trash</button>
					</span>
				</header>
			) : (
				<article className='mail-body' onClick={() => openMail(mail.id)}>
					<h2>{mail.subject}</h2>
					<button onClick={() => onDeleteMail(mail.id)}>Trash</button>
					<Link className={'clean-link'} to={`/mail/${mail.id}`}>
						<button>Expand</button>
					</Link>
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
