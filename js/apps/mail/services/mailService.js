// The emailService query function should get a criteria(filterBy) object, here is an idea:
// const criteria = {
//  status: 'inbox/sent/trash/draft',
//  txt: 'puki', // no need to support complex text search
//  isRead: true, // (optional property, if missing: show all)
//  isStared: true, // (optional property, if missing: show all)
//  lables: ['important', 'romantic'] // has any of the labels
// }

import {storageService} from '../../../services/storage.service.js';

import {utilService} from '../../../services/util.service.js';

export const mailService = {
	query,
	getLoggedinUser,
	addMail,
	getMailById,
	getNewMailId,
	deleteMail,
	getMails,
	saveMails,
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
				id: utilService.makeId(),
				by: `User`, // Add Capitalization
				from: 'user@appsus.com',
				subject: 'Care to join the dark side?',
				body: 'We have Cookies',
				isRead: false,
				sentAt: 1551133930594,
				to: 'momo@momo.com',
				isOpen: false,
				isDeleted: false,
				isStarred: false,
			},
			{
				id: utilService.makeId(),
				by: `User`, // Add Capitalization
				from: 'user@appsus.com',
				subject: 'Lets code together',
				body: 'we can make a local copy of Gmail',
				isRead: true,
				sentAt: 1551133930594,
				to: 'arealemailaddress@gmail.com',
				isOpen: false,
				isDeleted: false,
				isStarred: false,
			},
			{
				id: utilService.makeId(),
				by: `Rick`, // Add Capitalization
				from: 'rickastley@apssus.com',
				subject: 'Check out this cool React tutorial I found',
				body: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
				isRead: false,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isDeleted: false,
				isStarred: false,
			},
			{
				id: utilService.makeId(),
				by: `User`, // Add Capitalization
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isDeleted: false,
				isStarred: false,
			},
			{
				id: utilService.makeId(),
				by: 'Oded Kovo',
				from: 'notodedsrealmail@appsus.com',
				subject: 'Check out my Lorems',
				body: utilService.makeLorem(70),
				isRead: false,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isDeleted: false,
				isStarred: false,
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

function saveMails(mails) {
	return _saveMailsToStorage(mails);
}

function getMails() {
	return _loadMailsFromStorage();
}

function deleteMail(mailId) {
	const mails = _loadMailsFromStorage();
	let mail = mails.findIndex((mail) => {
		return mailId === mail.id;
	});
	console.log(mail);
	if (mail.isDeleted) mails.splice(mail, 1);
	_saveMailsToStorage(mails);
}

function getMailById(mailId) {
	const mails = _loadMailsFromStorage();
	const mail = mails.find((mail) => {
		return mail.id === mailId;
	});
	return Promise.resolve(mail);
}

function getNewMailId() {
	return utilService.makeId();
}

// Private Funcs

function _getFilteredMails(mails, filterBy) {
	let {searchVal, isRead} = filterBy;
	if (isRead === 'read') isRead = true;
	else if (isRead === 'unread') isRead = false;
	return mails.filter((mail) => {
		if (isRead === 'all') return mails && mail.subject.includes(searchVal);
		else if (!searchVal) return mail.isRead === isRead;
		else if (!searchVal && !mail.isRead) return mails;
		return mail.subject.includes(searchVal) && mail.isRead === isRead;
	});
}

function _saveMailsToStorage(mails) {
	storageService.saveToStorage(KEY, mails);
}

function _loadMailsFromStorage() {
	return storageService.loadFromStorage(KEY);
}
