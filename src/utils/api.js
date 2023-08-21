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

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}

	_request(url, options) {
		return fetch(url, options).then(this._handleResponse)
	}

	getUserData() {
		return this._request(`${this._url}/users/me`, {
			headers: this._headers,
		})
	}

	sendUserData(userData) {
		return this._request(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: userData.name,
				about: userData.about
			})
		})
	}

	sendAvatarData(userAvatar) {
		return this._request(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: userAvatar.avatar
			})
		})
	}

	addNewCard({ name, link }) {
		return this._request(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({ name, link })
		})
	}

	getCards() {
		return this._request(`${this._url}/cards`, {
			headers: this._headers,
		})
	}

	deleteCard(cardId) {
		return this._request(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
	}

	putLike(cardId) {
		return this._request(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
	}

	deleteLike(cardId) {
		return this._request(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
	}

	changeLikeCardStatus(cardId, isLiked) {
		if (isLiked) {
			return this.deleteLike(cardId);
		} else {
			return this.putLike(cardId);
		}
	}
}

export const api = new Api(apiOptions);