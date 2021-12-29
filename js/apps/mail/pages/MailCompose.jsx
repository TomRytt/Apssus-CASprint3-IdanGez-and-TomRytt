const {Link} = ReactRouterDOM;
export class MailCompose extends React.Component {
	render() {
		return (
			<div>
				<Link className='go-back-container' to='/mail' />
				<div className='compose-mail-container'>
					<header>
						<h1>New Message</h1>
					</header>
					<form>
						<label>
							<input type='text' id='to' name='to' placerholder='To' />
							<input type='text' id='cc' name='cc' placeholder='Cc' />
							<input type='text' id='bcc' name='bcc' placeholder='Bcc' />
							<input
								type='text'
								id='subject'
								name='subject'
								placeholder='Subject'
							/>
						</label>
					</form>
				</div>
			</div>
		);
	}
}
