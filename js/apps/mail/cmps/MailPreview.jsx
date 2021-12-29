import {utilService} from '../../../services/util.service.js';
import {LongText} from '../../../cmps/LongText.jsx';

const {Link} = ReactRouterDOM;

export function MailPreview({mail, openMail}) {
	return (
		<Link className='clean-link' to='/mail'>
			<article className='mail-preview'>
				{!mail.isOpen ? (
					<header onClick={() => openMail(mail.id)}>
						<div
							className={
								mail.isRead ? 'mail-preview-read' : 'mail-preview-unread'
							}>
							<p className='mail-header-by'>{mail.by}</p>
							<p>{mail.subject}</p>
							<span>12:40</span>
						</div>
						<LongText text={mail.body} className='mail-header-preview' />
					</header>
				) : (
					<article className='mail-body' onClick={() => openMail(mail.id)}>
						<h2>{mail.subject}</h2> <button>Trash</button>
						<button>Expand</button>
						<p>
							<b>{mail.by} </b>
							<span> {`<${mail.from}>`}</span>
						</p>
						<p>{mail.body}</p>
					</article>
				)}
			</article>
		</Link>
	);
}

// To do:
// 1. add onDelete mail in the onclick and the trash symbol
// 2. add click to expand and an expand button (when expanded) that leads to a nested route to the details page
// 3. add styling
// 4. add a time/date at the top right of each mail
// 5. add read/unread states with different styles
// 6. add an isOpen state which is defaulted as false and becomes true onclick and opens the email
