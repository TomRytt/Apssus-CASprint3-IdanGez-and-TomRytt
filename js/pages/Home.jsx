const {NavLink, withRouter} = ReactRouterDOM;

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className='welcome'>Welcome to Appssus! </div>
				<br />
				<br />
				<br />

				<div className='into'>
					Appssus allows you to manage your E-Mails, Notes and Bookshop at the
					same place.
				</div>
				<br />
				<br />
				<section className='apps-details'>
					<div className='app-details-mail'>
						Take a look at our new and unique Mail-App{' '}
						<NavLink activeClassName='my-active' to='/mail'>
							<img
								className='mail-app-icon'
								src='../../assets/imgs/main/email.png'
								alt=''
							/>
						</NavLink>
					</div>
					<div className='app-details-notes'>
						{' '}
						Try out the Keep-App - noting managing like no other{' '}
						<NavLink activeClassName='my-active' to='/notes'>
							<img
								className='note-app-icon'
								src='../../assets/imgs/main/notes.png'
								alt=''
							/>
						</NavLink>
					</div>
					<div className='app-details-books'>
						Do you like books? everybody does! come on and check our book shop!{' '}
						<NavLink activeClassName='my-active' to='/books'>
							<img
								className='bookshop-icon'
								src='../../assets/imgs/main/book.png'
								alt=''
							/>
						</NavLink>
					</div>
				</section>
				<div className='about flex'>
					<section className='about-myinfo idan'>
						<div className='my-info'>
							<img src='../../assets/imgs/main/1.jpg' alt='' />
							<h4>Idan Gez</h4>
							<p>
								Coding Academy <br />
								Full-Stack Developer <br />
								Student
							</p>
						</div>
					</section>
					<section className='about-myinfo tom'>
						<div className='my-info'>
							<img src='../../assets/imgs/main/2.jpg' alt='' />
							<h4>Tom Rytt</h4>
							<p>
								Coding Academy <br />
								Full-Stack Developer <br />
								Student
							</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
