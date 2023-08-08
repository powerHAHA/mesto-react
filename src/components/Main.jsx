import React from 'react';
import { api } from '../utils/api';
import { Card } from './Card';

export const Main = (props) => {
	const [userName, setUserName] = React.useState("Ваше имя");
	const [userDescription, setUserDescription] = React.useState('Род деятельности');
	const [userAvatar, setUserAvatar] = React.useState("");
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getUserData().then((data) => {
			setUserName(data.name);
			setUserDescription(data.about);
			setUserAvatar(data.avatar);
		}).catch((err) => console.log(`При загрузке данных Пользователя возникла ошибка: ${err}`))

		api.getCards().then((data) => {
			setCards(data);
		}).catch((err) => console.log(`При загрузке карточек с сервера возникла ошибка: ${err}`))
	}, [])

	return (
		<main className="content">
			<section className="profile page__profile">
				<div className="profile__info">
					<div className="profile__avatar-container">
						<img src={userAvatar} alt="Аватар" className="profile__avatar" />
						<button
							className="profile__button-avatar button"
							type="button"
							aria-label="Редактировать аватар"
							onClick={props.onEditAvatar}>
						</button>
					</div>
					<div className="profile__description">
						<div className="profile__container">
							<h1 className="profile__name">{userName}</h1>
							<button
								className="profile__button-edit button"
								type="button"
								aria-label="Редактировать профиль"
								onClick={props.onEditProfile}>
							</button>
						</div>
						<p className="profile__job">{userDescription}</p>
					</div>
				</div>
				<button
					className="profile__button-add button"
					type="button"
					aria-label="Добавить карточку"
					onClick={props.onAddPlace}>
				</button>
			</section>
			<section className="elements page__elements">
				<ul className="elements__items">

					{cards.map((card) => {
						return (
							<Card
								key={card._id}
								name={card.name}
								img={card.link}
								likes={card.likes}
								onCardClick={props.onCardClick} />
						)
					})}
				</ul>
			</section>
		</main>
	)
}