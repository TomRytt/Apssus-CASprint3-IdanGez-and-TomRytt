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
	toggleStarred,
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

// Increase the demo-data by 3-fold
function query(filterBy = null) {
	let mails = _loadMailsFromStorage();
	if (!mails || !mails.length) {
		console.log('from json');
		mails = [
			{
				id: utilService.makeId(),
				status: 'sent',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Care to join the dark side?',
				body: 'We have Cookies',
				isRead: false,
				sentAt: 1551133930594,
				to: 'momo@momo.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Lets code together',
				body: 'we can make a local copy of Gmail',
				isRead: false,
				sentAt: 1551133930594,
				to: 'arealemailaddress@gmail.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: `Rick`,
				from: 'rickastley@apssus.com',
				subject: 'Check out this cool React tutorial I found',
				body: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
				isRead: false,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'Oded Kovo',
				from: 'notodedsrealmail@appsus.com',
				subject: 'Check out my Lorems',
				body: utilService.makeLorem(70),
				isRead: false,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},

			// starred
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: false,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: false,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: false,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(70),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(80),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(60),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},

			// Trash
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `Dean`,
				from: 'fakeemail@appsus.com',
				subject: 'Have you read what Lorem Ipsum means??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `Inbar`,
				from: 'fakeemail@appsus.com',
				subject: 'How cool is demo-data???',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'How much demo data do you think we need??',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'fakeemail@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `Another fake user`,
				from: 'fakeemail@appsus.com',
				subject: 'Yes',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 1551133930594,
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
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
		status: mail.status,
		by: mail.by,
		from: mail.from,
		subject: mail.subject,
		body: mail.body,
		isRead: mail.isRead,
		sentAt: mail.sentAt,
		to: mail.to,
		isOpen: mail.isOpen,
		isStarred: false,
		isHovered: false,
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

function deleteMail(foundMail) {
	console.log(foundMail);
	const mails = _loadMailsFromStorage();
	let foundMailIdx = mails.findIndex((mail) => {
		return foundMail.id === mail.id;
	});
	if (mails[foundMailIdx].status !== 'trash') {
		mails[foundMailIdx].status = 'trash';
		mails[foundMailIdx].isStarred = false;
		mails[foundMailIdx].isRead = false;
		_saveMailsToStorage(mails);
		console.log(mails);
	} else if (foundMail.status === 'trash') {
		mails.splice(foundMailIdx, 1);
		_saveMailsToStorage(mails);
	}
	return Promise.resolve();
}

function toggleStarred(mailId) {
	const mails = _loadMailsFromStorage();
	let mail = mails.findIndex((mail) => {
		return mail.id === mailId;
	});
	mails[mail].isStarred = !mails[mail].isStarred;
	_saveMailsToStorage(mails);
	return Promise.resolve();
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
	let {status, searchVal, isRead, isStarred} = filterBy;
	if (isRead === 'read') isRead = true;
	else if (isRead === 'unread') isRead = false;
	return mails.filter((mail) => {
		if (status) return mail.status === status;
		else if (isStarred === 'true') return mail.isStarred;
		else if (mail.status !== 'trash') {
			if (isRead === 'all') {
				return (
					(mails &&
						mail.subject.toLowerCase().includes(searchVal.toLowerCase())) ||
					mail.body.toLowerCase().includes(searchVal.toLowerCase()) ||
					mail.from.toLowerCase().includes(searchVal.toLowerCase()) ||
					mail.by.toLowerCase().includes(searchVal.toLowerCase()) ||
					(mail.to.toLowerCase().includes(searchVal.toLowerCase()) &&
						mail.isRead === isRead)
				);
			} else if (!searchVal) return mail.isRead === isRead;
			else if (!searchVal && !mail.isRead) return mails;
			return (
				mail.subject.toLowerCase().includes(searchVal.toLowerCase()) ||
				mail.body.toLowerCase().includes(searchVal.toLowerCase()) ||
				mail.from.toLowerCase().includes(searchVal.toLowerCase()) ||
				mail.by.toLowerCase().includes(searchVal.toLowerCase()) ||
				(mail.to.toLowerCase().includes(searchVal.toLowerCase()) &&
					mail.isRead === isRead)
			);
		}
	});
}

function _saveMailsToStorage(mails) {
	storageService.saveToStorage(KEY, mails);
}

function _loadMailsFromStorage() {
	return storageService.loadFromStorage(KEY);
}
