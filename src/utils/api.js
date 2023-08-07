const apiOptions = {
	url: 'https://mesto.nomoreparties.co/v1/cohort-70/',
	headers: {
		authorization: '94c10f33-d262-4a4c-9a4b-3d7349d0a01e',
		'Content-Type': 'application/json'
	}
}

class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
	}

	getUserData() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	sendUserData(userData) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: userData.profileName,
				about: userData.profileJob
			})
		})
			.then(this._handleResponse)
	}

	sendAvatarData(userAvatar) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: userAvatar.imageAvatar
			})
		})
			.then(this._handleResponse)
	}

	addNewCard({ name, link }) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({ name, link })
		})
			.then(this._handleResponse)
	}

	getCards() {
		return fetch(`${this._url}/cards`, {
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	putLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	deleteLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}
}

export const api = new Api(apiOptions);