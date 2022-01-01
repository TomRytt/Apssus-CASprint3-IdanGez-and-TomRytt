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

function query(filterBy = 'inbox') {
	let mails = _loadMailsFromStorage();
	if (!mails || !mails.length) {
		mails = [
			{
				id: utilService.makeId(),
				status: 'sent',
				by: `User`,
				from: 'user@appsus.com',
				subject: 'Care to join the dark side?',
				body: 'We have Cookies',
				isRead: false,
				sentAt: 'September 25 15:37',
				to: 'momo@momo.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'FitOn',
				from: 'fiton@newsletters.fitonapp.com',
				subject: 'Start Now!',
				body: 'Barre and Pilates blended together. This class includes a series of movements to strengthen your dance barre technique while using the foundations of Pilates.',
				isRead: false,
				sentAt: 'September 09 13:23',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'FitOn',
				from: 'fiton@newsletters.fitonapp.com',
				subject: 'Start Now 2#!',
				body: 'Butt and Thigh Toner- Are you ready to feel the burn?.',
				isRead: false,
				sentAt: 'October 15 12:31',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'FitOn',
				from: 'fiton@newsletters.fitonapp.com',
				subject: 'Just Starttttt!!',
				body: 'Move your ass for god"s sake',
				isRead: true,
				sentAt: 'October 31 13:19',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'neta',
				from: 'neta@gmail.com',
				subject: 'wash the dishes',
				body: 'its your tern! By the way, happy birthday.',
				isRead: true,
				sentAt: 'November 03 12:45',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: 'user',
				from: 'user@appsus.com',
				subject: 'Worst Girlfriend Ever',
				body: '!!!!!',
				isRead: false,
				sentAt: 'November 03 19:21',
				to: 'noamgalon93@gmail.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: 'user',
				from: 'user@appsus.com',
				subject: 'MOMMM',
				body: 'Dear mom, just wanted you to know I miss you. You"re the best mom I could ask for!.',
				isRead: false,
				sentAt: 'November 08 20:03',
				to: 'supermom@gmail.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'Coding Academi',
				from: 'Coding@gmail.com',
				subject: 'happy new year',
				body: 'Dear User, happy new year and have a good time celebrating the art of coding😊',
				isRead: true,
				sentAt: 'December 31 23:59',
				to: 'user@appsus.com',
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
				sentAt: 'November 12 20:03',
				to: 'arealemailaddress@gmail.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'Asado Palace',
				from: 'Asado Palace55@hotmail.com',
				subject: 'Free meal',
				body: 'User, it"s your lucky day, come to Asado Palace and get a Free Meal!',
				isRead: true,
				sentAt: 'November 20 13:02',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'Ori',
				from: 'OriBFF@gmail.com',
				subject: 'TRY NOT TO LAUGH CHALLENGE',
				body: 'Dude watch this, it"s a Good Stuff! https://www.youtube.com/watch?v=tQr-Lt2PtTg',
				isRead: true,
				sentAt: 'December 23 11:59',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'Dorit Pian',
				from: 'Dorit-p@gmail.com',
				subject: 'hello to you',
				body: 'hi, its me, Dorit, Its been a long time, but I can"t stop thinking about you. If you feel the same, please call.',
				isRead: true,
				sentAt: 'December 20 22:52',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'sent',
				by: 'user',
				from: 'user@appsus.com',
				subject: 'hello to you Dorit…',
				body: 'Sorry dear, wrong adress',
				isRead: false,
				sentAt: 'December 22 20:05',
				to: 'Dorit-p@gmail.com',
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
				sentAt: 'December 15 20:05',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: false,
				isHovered: false,
			},
			{
				id: utilService.makeId(),
				status: 'inbox',
				by: 'ebay',
				from: 'ebay@reply5.ebay.com',
				subject: 'Updates to User Privacy Notice.',
				body: 'We"re updating our User Privacy Notice to reflect changes that will make it easier for you to understand the personal data we collect and to give you greater control over your personal data',
				isRead: true,
				sentAt: 'December 25 06:12',
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
				sentAt: 'December 03 12:45',
				to: 'user@appsus.com',
				isOpen: false,
				isStarred: true,
				isHovered: false,
			},

			// starred
			// Trash
			{
				id: utilService.makeId(),
				status: 'trash',
				by: `Inbar`,
				from: 'fakeemail@appsus.com',
				subject: 'How cool is demo-data???',
				body: utilService.makeLorem(35),
				isRead: true,
				sentAt: 'December 1 10:05',
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
				sentAt: 'December 15 20:05',
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
				sentAt: 'December 15 20:05',
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
	const mails = _loadMailsFromStorage();
	let foundMailIdx = mails.findIndex((mail) => {
		return foundMail.id === mail.id;
	});
	if (mails[foundMailIdx].status !== 'trash') {
		mails[foundMailIdx].status = 'trash';
		mails[foundMailIdx].isStarred = false;
		mails[foundMailIdx].isRead = false;
		_saveMailsToStorage(mails);
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
	console.log(filterBy);
	let {status, searchVal, isRead, isStarred} = filterBy;
	if (isRead === 'read') isRead = true;
	else if (isRead === 'unread') isRead = false;
	return mails.filter((mail) => {
		if (status) return mail.status === status;
		else if (isStarred === 'true') return mail.isStarred;
		else if (mail.status !== 'trash') {
			if (isRead === 'all' && mail.status !== 'sent') {
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
