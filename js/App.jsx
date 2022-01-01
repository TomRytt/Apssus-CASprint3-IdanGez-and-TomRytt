// Pages
import {MailApp} from './pages/MailApp.jsx';
import {BookApp} from './pages/BookApp.jsx';
import {NotesApp} from './pages/NotesApp.jsx';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';

// Cmps
import {UserMsg} from './cmps/UserMsg.jsx';
import {AppHeader} from './cmps/AppHeader.jsx';

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
						<Route component={Home} path='/' />
					</Switch>
				</main>
			</section>
			<UserMsg />
		</Router>
	);
}
