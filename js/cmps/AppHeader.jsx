const {NavLink, withRouter} = ReactRouterDOM;
class _AppHeader extends React.Component {
	render() {
		return (
			<header className='app-header'>
				<div className='header-container'>
					<h1 onClick={() => this.props.history.push('/')}>Appssus 🦄</h1>

					<nav className='app-nav'>
						<NavLink activeClassName='my-active' to='/mail'>
							<img
								className='mail-app-icon'
								src='assets/imgs/main/email.png'
								alt=''
							/>
						</NavLink>
						<NavLink activeClassName='my-active' to='/notes'>
							<img
								className='note-app-icon'
								src='assets/imgs/main/notes.png'
								alt=''
							/>
						</NavLink>
						<NavLink activeClassName='my-active' to='/books'>
							<img
								className='bookshop-icon'
								src='assets/imgs/main/book.png'
								alt=''
							/>
						</NavLink>
					</nav>
				</div>
			</header>
		);
	}
}

export const AppHeader = withRouter(_AppHeader);
