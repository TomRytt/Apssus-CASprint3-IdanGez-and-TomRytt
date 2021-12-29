import {MailPreview} from './MailPreview.jsx';

const {Link} = ReactRouterDOM;

export function MailList({mails}) {
	function openMail(mailId) {
		mails.map((mail) => {
			if (mail.id !== mailId) mail.isOpen = false;
			if (mail.id === mailId) {
				mail.isOpen = !mail.isOpen;
				mail.isRead = true;
			}
		});
	}

	return (
		<section className='mail-list-container'>
			{mails.map((mail) => (
				<MailPreview
					key={mail.id}
					mail={mail}
					openMail={() => openMail(mail.id)}
				/>
			))}
			<Link className='primary-btn clean-link' to='/mail/composemail'>
				<button>Compose Mail</button>
			</Link>
		</section>
	);
}
