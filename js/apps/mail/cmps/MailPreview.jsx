import {utilService} from '../../../services/util.service.js';

const {Link} = ReactRouterDOM;

export function MailPreview({mail}) {
	return (
		<Link className='clean-link' to={`/mail/${mail.id}`}>
			<article className='mail-preview'>
				<header className='mail-title'>
					<h2>{mail.subject}</h2> <button>Trash</button>
					<button>Expand</button>
					<p>
						<b>{mail.by} </b>
						<span> {`<${mail.from}>`}</span>
					</p>
					<p>{mail.body}</p>
				</header>
				<article className='mail-body'></article>
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
