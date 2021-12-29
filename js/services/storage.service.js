export const storageService = {
	loadFromStorage,
	saveToStorage,
};

// const KEY = 'bookDB';

function saveToStorage(key, val) {
	localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
	var val = localStorage.getItem(key);
	return JSON.parse(val);
}
