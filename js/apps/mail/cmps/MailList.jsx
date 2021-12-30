// import {utilService} from '../../../../js/services/util.service';

import {MailPreview} from './MailPreview.jsx';

const {Link} = ReactRouterDOM;

export function MailList({mails, openMail, onDeleteMail}) {
	return (
		<section className='mail-list-container'>
			{mails.map((mail) => (
				<MailPreview
					key={mail.id}
					mail={mail}
					openMail={() => openMail(mail.id)}
					onDeleteMail={() => onDeleteMail(mail.id)}
				/>
			))}
			{/* Move compose button and CMP to the mailApp */}
			<Link className='primary-btn clean-link' to='/mail/composemail'>
				<button>Compose Mail</button>
			</Link>
		</section>
	);
}
