const {Link} = ReactRouterDOM;
export class MailCompose extends React.Component {
	render() {
		return (
			<div>
				<Link className='compose-mail-container' to='/mail' />
				<div className='compose-mail'>Mail Compose</div>
			</div>
		);
	}
}
