// import {utilService} from '../../../../js/services/util.service';

import {MailPreview} from './MailPreview.jsx';

export function MailList({mails, openMail, onDeleteMail}) {
	return (
		<section className='mail-list-container'>
			{mails.map((mail) => (
				<MailPreview
					key={mail.id}
					mail={mail}
					openMail={() => openMail(mail.id)}
					onDeleteMail={() => onDeleteMail(mail)}
				/>
			))}
		</section>
	);
}
