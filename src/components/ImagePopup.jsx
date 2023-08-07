import React from "react";
export const ImagePopup = (props) => {
	return (
		<>
			<div className={props.card.name ? 'popup popup_opened popup_type_view-img' : 'popup popup_type_view-img'}>
				<div className="popup__container popup__container_type_img">
					<button
						className="popup__button-close button"
						type="button"
						aria-label="Закрыть"
						onClick={props.onClose}>
					</button>
					<figure className="popup__container-image">
						<img
							className="popup__img"
							src={props.card.img}
							alt={props.card.name} />
						<figcaption className="popup__caption">{props.card.name}</figcaption>
					</figure>
				</div>
			</div>
		</>
	)
}