import React from "react";
export const PopupWithForm = (props) => {
	return (
			<div className={props.isOpen ? `popup popup_opened popup_type_${props.name}` : `popup popup_type_${props.name}`}>
				<div className="popup__container">
					<button
						className="popup__button-close button"
						type="button"
						aria-label="Закрыть"
						onClick={props.onClose}>
					</button>
					<form name={props.name} className="popup__form">
						<h3 className="popup__title">{props.title}</h3>
						{props.children}
						<button className="popup__button-submit button" type="submit"
							aria-label="Подтвердить">{props.buttonText}</button>
					</form>
				</div>
			</div >
	)
}