import {noteService} from '../services/note.service.js';

const {Link} = ReactRouterDOM;
export class NoteEdit extends React.Component {
	state = {
		// update: false,
		type: '',
		id: '',
		isPinned: '',
		style: {backgroundColor: ''},
		info: {
			txt: '',
			label: '',
			url: '',
		},
		todos: [],
	};

	componentDidMount() {
		console.log('hi');
		let note = this.props.note;
		if (note)
			// console.log(note)
			this.setState({
				id: note.id,
				update: true,
				// type: note.type,
				info: {
					txt: note.info.txt,
					label: note.info.label,
					url: note.info.url,
					listLabel: note.info.label,
					todos: note.info.todos && note.info.todos.map((todo) => todo.txt),
					style: {backgroundColor: note.style.backgroundColor},
				},
			});
	}

	handleChange = ({target}, infotype, idx) => {
		if (infotype === 'todo') {
			var newTodos = this.state.todos.slice();
			newTodos[idx] = target.value;
			this.setState((prevState) => ({...prevState, todos: newTodos}));
		} else
			this.setState((prevState) => ({
				info: {...prevState.info, [infotype]: target.value},
			}));
	};

	editNoteInfo = (ev) => {
		ev.preventDefault();
		const {id, type, info} = this.state;
		console.log(type);
		if (type === 'note-txt')
			noteService.updateNote(id, type, info.txt, info.style.backgroundColor);
		// else if (type === "note-img") noteService.updateNote(id, type, text, null, null, null, null, color)
		// else if (type === "note-video") noteService.updateNote(id, type, text, null, null, null, null, color)
		// else if (type === "note-todos") noteService.updateNote(id, type, text, null, null, null, null, color)
	};

	render() {
		const {type, info, todos} = this.state;
		return (
			<div>
				<Link className='go-back-container' to='/notes/' />
				<article className='mail-details-container'>
					<form className='note-edit-form'>
						{type === 'note-txt' && (
							<input
								onChange={(ev) => this.handleChange(ev, 'txt')}
								value={info.txt}
								placeholder='enter text here'
								type='text'
							/>
						)}
						{type === 'note-img' && (
							<input
								onChange={(ev) => this.handleChange(ev, 'label')}
								value={info.label}
								placeholder='enter img title here'
								type='text'
							/>
						)}
						{(type === 'note-img' || type === 'note-video') && (
							<input
								onChange={(ev) => this.handleChange(ev, 'url')}
								value={info.url}
								placeholder='enter url here'
								type='text'
							/>
						)}
						{type === 'note-todos' && (
							<div>
								<label htmlFor={'label'}>Enter list label: </label>
								<input
									onChange={(ev) => this.handleChange(ev, 'label')}
									value={info.label}
									placeholder='enter list label here'
									type='text'
									id='label'
								/>
							</div>
						)}
						{type === 'note-todos' &&
							todos.map((t, idx) => {
								return (
									<div key={`todo-container${idx}`}>
										<label htmlFor={`todo-${idx}`}>
											Enter todo {idx + 1}:{' '}
										</label>
										<input
											key={`todo${idx}`}
											onChange={(ev) => this.handleChange(ev, 'todos', idx)}
											value={todos[idx]}
											placeholder='enter todo here'
											type='text'
											id={`todo-${idx}`}
										/>
									</div>
								);
							})}
						{/* {ctg === "NoteTodos" && (
                            <button type='button' onClick={() => this.addTodo(todo)}>
                                add more todo
                            </button>
                        )} */}

						{/* {ctg && <input onChange={(ev) => this.handleChange(ev, "color")} value={info.color} placeholder='enter background color here' type='color' />}
                        {ctg && !update && (
                            <button type='submit' onClick={(ev) => this.addNote(ev, "add")}>
                                Add Note
                            </button>
                        )} */}
						{/* {ctg && update && ( */}
						<button type='submit' onClick={(ev) => this.editNoteInfo(ev)}>
							Update Note
						</button>
						{/* )} */}
					</form>
				</article>
			</div>
		);
	}
}
