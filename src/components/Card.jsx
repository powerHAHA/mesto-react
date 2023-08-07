import React from "react";
export const Card = (props) => {
	function handleClick() {
		props.onCardClick(props);
	}
	return (
		<li className="element">
			<img
				className="element__image"
				src={props.img}
				alt={props.name}
				onClick={handleClick} />
			<button className="element__button-delete button" type="button" aria-label="Удалить карточку"></button>
			<div className="element__description">
				<h2 className="element__title">{props.name}</h2>
				<div className="element__container-likes">
					<button className="element__button-like button" type="button" aria-label="Лайкнуть карточку"></button>
					<p className="element__like-counter">{props.likes.length}</p>
				</div>
			</div>
		</li>
	)
}