export class Home extends React.Component {
	render() {

		return (
			<div>
				<div className="welcome">Welcome to Appssus! </div>
				<br />
				<br />
				<br />

				<div className="into">Appssus allows you to manage your E-Mails,
					Notes and Bookshop at the same place.</div>
				<br />
				<br />
				<section className="apps-details">
					<div className="app-details-mail">Take a look at our new and unique Mail-App <img className="mail-app-icon" src="../../assets/imgs/main/email.png" alt="" /></div>
					<div className="app-details-notes"> Try out the Keep-App - noting managing like no other <img className="note-app-icon" src="../../assets/imgs/main/notes.png" alt="" /></div>
					<div className="app-details-books">Do you like books? everybody does! come on in and find the best ways to run an online bookshop! <img className="bookshop-icon" src="../../assets/imgs/main/book.png" alt="" /></div>
				</section >
				<div className="about flex">
					<section className="about-myinfo idan">
						<div className="my-info">
							<img src="../../assets/imgs/main/1.jpg" alt="" />
							<h4>Idan Gez</h4>
							<p >Coding Academy <br />
								Full-Stack Developer <br />
								Student</p>
						</div>
					</section>
					<section className="about-myinfo tom">
						<div className="my-info">
							<img src="../../assets/imgs/main/2.jpg" alt="" />
							<h4>Tom Rytt</h4>
							<p >Coding Academy <br />
								Full-Stack Developer <br />
								Student</p>
						</div>
					</section>
				</div>
			</div>
		)
	}
}