import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor({selectorPopup}) {
    super(selectorPopup);
    this._popupCardImage = this._popup.querySelector('.popup-card__image');
    this._popupCardText = this._popup.querySelector('.popup-card__text');
  }
  open(name, link) {
    this._popupCardImage.src = link;
    this._popupCardImage.alt = name;
    this._popupCardText.textContent = name;

    super.open();
  }
}