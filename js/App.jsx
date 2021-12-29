// Pages
import {MailApp} from './js/pages/MailApp.jsx';
import {BookApp} from './js/pages/BookApp.jsx';
import {NotesApp} from './js/pages/NotesApp.jsx';
import {Home} from './js/pages/Home.jsx';
import {About} from './js/pages/About.jsx';

// Cmps
import {UserMsg} from './js/cmps/UserMsg.jsx';
import {AppHeader} from './js/cmps/AppHeader.jsx';
import {Footer} from './js/cmps/Footer.jsx';

// ReactDom
const Router = ReactRouterDOM.HashRouter;
const {Route, Switch} = ReactRouterDOM;

// Main App
export function App() {
	return (
		<Router>
			<section className='app'>
				<header className='main-header'>
					<AppHeader />
				</header>
				<main>
					<Switch>
						<Route component={MailApp} path='/mail' />
						<Route component={BookApp} path='/books' />
						<Route component={NotesApp} path='/notes' />
						<Route component={About} path='/about' />
						<Route component={Home} path='/' />
					</Switch>
				</main>
			</section>
			<Footer />
			<UserMsg />
		</Router>
	);
}
