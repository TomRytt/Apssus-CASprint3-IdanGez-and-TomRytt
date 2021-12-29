const { NavLink, withRouter } = ReactRouterDOM;
class AppHeader extends React.Component {

    render(){
        return (
            <header className="app-header">
                <div className="header-container">
                    <h1 onClick={() => this.props.history.push('/')}>Appssus</h1>
                    <nav className="app-nav">
                      <NavLink activeClassName="my-active" exact to="/"> Home </NavLink>
                      <NavLink activeClassName="my-active" to="/about"> About </NavLink>
                      <NavLink activeClassName="my-active" to="/mail"> MailApp </NavLink>
                      <NavLink activeClassName="my-active" to="/notes"> KeepApp </NavLink>
                      <NavLink activeClassName="my-active" to="/books"> BookApp </NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export const AppHeader =  withRouter(AppHeader);