import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { api } from '../utils/api';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({
		name: '',
		img: '',
	});

	function handleCardClick(props) {
		setSelectedCard({
			name: props.name,
			img: props.img,
		});
	}

	function handleEditProfileClick() { setEditProfilePopupOpen(true); }
	function handleEditAvatarClick() { setEditAvatarPopupOpen(true); }
	function handleAddPlaceClick() { setAddPlacePopupOpen(true); }

	function closeAllPopups() {
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setEditAvatarPopupOpen(false);
		setSelectedCard({
			name: '',
			img: ''
		})
	}

	return (
		<div className="page">
			<div className="page__container">
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onEditAvatar={handleEditAvatarClick}
					onAddPlace={handleAddPlaceClick}
					onCardClick={handleCardClick}
				/>
				<Footer />

			</div>

			<PopupWithForm
				name="editProfile"
				title="Редактировать профиль"
				buttonText="Сохранить"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}>

				<input id="input-name" name="profileName" className="popup__input popup__input_type_name" type="text"
					placeholder="Имя" required minLength="2" maxLength="40" />
				<span id="input-name-error" className="popup__input-error"></span>
				<input id="input-job" name="profileJob" className="popup__input popup__input_type_job" type="text"
					placeholder="О себе" required minLength="2" maxLength="200" />
				<span id="input-job-error" className="popup__input-error"></span>
			</PopupWithForm>

			<PopupWithForm
				name="addCard"
				title="Новое место"
				buttonText="Создать"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}>
				<input id="input-title" name="imageName" className="popup__input popup__input_type_title" type="text"
					placeholder="Название" required minLength="2" maxLength="30" />
				<span id="input-title-error" className="popup__input-error"></span>
				<input id="input-img" name="imageLink" className="popup__input popup__input_type_src" type="url"
					placeholder="Ссылка на картинку" required />
				<span id="input-img-error" className="popup__input-error"></span>
			</PopupWithForm>

			<PopupWithForm
				name="editAvatar"
				title="Обновить аватар"
				buttonText="Сохранить"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}>

				<input id="input-src" name="imageAvatar" className="popup__input popup__input_type_avatar" type="url"
					placeholder="Ссылка на картинку" required />
				<span id="input-src-error" className="popup__input-error"></span>
			</PopupWithForm>

			<PopupWithForm
				name="deleteCard"
				title="Вы уверены?"
				buttonText="Да" />

			<ImagePopup
				card={selectedCard}
				onClose={closeAllPopups} />
		</div>
	);
}

export default App;