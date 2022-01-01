import {MailPreview} from './MailPreview.jsx';

export function MailList({
	mails,
	openMail,
	onDeleteMail,
	toggleRead,
	onToggleStarred,
}) {
	return (
		<section className='mail-list-container'>
			{mails.map((mail) => (
				<MailPreview
					key={mail.id}
					mail={mail}
					openMail={() => openMail(mail.id)}
					onDeleteMail={() => onDeleteMail(mail)}
					toggleRead={() => toggleRead(mail.id)}
					onToggleStarred={() => onToggleStarred(mail.id)}
				/>
			))}
		</section>
	);
}
