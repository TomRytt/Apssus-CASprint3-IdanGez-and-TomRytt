import {storageService} from '../../../services/storage.service.js';

import {utilService} from '../../../services/util.service.js';

export const mailService = {
	query,
	getLoggedinUser,
	addMail,
	getMailById,
	getNewMailId,
	deleteMail,
};

const KEY = 'mailsDB';

// Database
function getLoggedinUser() {
	const loggedinUser = {
		email: 'user@appsus.com',
		fullname: 'Mahatma Appsus',
	};
	return loggedinUser;
}

function query(filterBy = null) {
	let mails = _loadMailsFromStorage();
	if (!mails || !mails.length) {
		console.log('from json');
		mails = [
			{
				id: 'e101',
				by: `User`, // Add Capitalization
				from: 'user@appsus.com',
				subject: 'Care to join the dark side?',
				body: 'We have Cookies',
				isRead: false,
				sentAt: 1551133930594,
				to: 'momo@momo.com',
				isOpen: false,
				isDeleted: false,
			},
			{
				id: 'e102',
				by: `User`, // Add Capitalization
				from: 'user@appsus.com',
				subject: 'Lets code together',
				body: 'we can make a local copy of Gmail',
				isRead: true,
				sentAt: 1551133930594,
				to: 'arealemailaddress@gmail.com',
				isOpen: false,
				isDeleted: false,
			},
			{
				id: 'e103',
				by: `Rick`, // Add Capitalization
				from: 'rickastley@apssus.com',
				subject: 'Check out this cool React tutorial I found',
				body: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
				isRead: false,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isDeleted: false,
			},
			{
				id: 'e104',
				by: `User`, // Add Capitalization
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isDeleted: false,
			},
			{
				id: 'e105',
				by: 'Oded Kovo',
				from: 'notodedsrealmail@appsus.com',
				subject: 'Check out my Lorems',
				body: utilService.makeLorem(70),
				isRead: false,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isDeleted: false,
			},
		];
		_saveMailsToStorage(mails);
	}
	if (!filterBy) return Promise.resolve(mails);
	const filteredMails = _getFilteredMails(mails, filterBy);
	return Promise.resolve(filteredMails);
}

// Funcs used by other cmps

function addMail(mail) {
	const newMail = {
		id: mail.id,
		by: mail.by,
		from: mail.from,
		subject: mail.subject,
		body: mail.body,
		isRead: mail.isRead,
		sentAt: mail.sentAt,
		to: mail.to,
		isOpen: mail.isOpen,
	};
	const mails = _loadMailsFromStorage();
	mails.unshift(newMail);
	_saveMailsToStorage(mails);
	return Promise.resolve();
}

function deleteMail(mailId) {
	const mails = _loadMailsFromStorage();
	let mail = mails.findIndex((mail) => {
		return mailId === mail.id;
	});
	console.log(mail);
	mails.splice(mail, 1);
	_saveMailsToStorage(mails);
}

function getMailById(mailId) {}

function getNewMailId() {
	const mails = _loadMailsFromStorage();
	const newMailId = `e10${+mails.length + 1}`;
	return newMailId;
}

// Private Funcs

function _getFilteredMails(mails, filterBy) {}

function _saveMailsToStorage(mails) {
	storageService.saveToStorage(KEY, mails);
}

function _loadMailsFromStorage() {
	return storageService.loadFromStorage(KEY);
}
