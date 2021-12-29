import {storageService} from '../../../services/storage.service.js';

import {utilService} from '../../../services/util.service.js';

export const mailService = {
	query,
	getLoggedinUser,
	addMail,
	getMailById,
};

// emailService
// • Model - start with a basic model of emails:
// const email = {
// id: 'e101',
// subject: 'Miss you!',
// body: 'Would love to catch up sometimes',
// isRead: false,
// sentAt : 1551133930594,
// to: 'momo@momo.com'
// }
// Also, in your email service have a basic user:

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
			},
		];
		_saveMailsToStorage(mails);
	}
	if (!filterBy) return Promise.resolve(mails);
	const filteredMails = _getFilteredMails(mails, filterBy);
	return Promise.resolve(filteredMails);
}

// Funcs used by other cmps

function addMail(mail) {}

function getMailById(mailId) {}

// Private Funcs

function _getFilteredMails(mails, filterBy) {}

function _saveMailsToStorage(mails) {
	storageService.saveToStorage(KEY, mails);
}

function _loadMailsFromStorage() {
	return storageService.loadFromStorage(KEY);
}
