import {utilService} from '../../../services/util.service.js';
const {Link} = ReactRouterDOM;

export function BookPreview({book}) {
	return (
		<Link className='clean-link' to={`/books/${book.id}`}>
			<article className='book-preview'>
				<h4>{book.title}</h4>
				<img src={`${book.thumbnail}`} alt='' />
				<h4>
					{book.listPrice.amount}
					{utilService.currencySymbolConverter(book)}
				</h4>
			</article>
		</Link>
	);
}
