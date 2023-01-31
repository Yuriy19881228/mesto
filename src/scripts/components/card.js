export class Card {
    constructor(data, itemTemplateSelector, handleOpenImage) {
        this._data = data;
        this._createCard = document.querySelector(itemTemplateSelector).content.querySelector('.card');
        this._itemElement = this._createCard.cloneNode(true);
        this._itemDeleteButton = this._itemElement.querySelector('.card__delete-button');
        this._itemLikeButton = this._itemElement.querySelector('.card__item-like-button');
        this._cardImage = this._itemElement.querySelector('.card__image');
        this._handleOpenImage = handleOpenImage;
    }
    _getTemplate() {
        const createCard =
        document.querySelector(itemTemplateSelector).content.querySelector('.card');

        return createCard;
    }
    _handleLikeButtonClick = () => {
        this._itemLikeButton.classList.toggle('card__item-like-button_active');
    }
    _handleDeleteButtonClick = () => {
        this._itemElement.remove();
    }
    _setEventListeners() {
        this._itemLikeButton.addEventListener('click', this._handleLikeButtonClick);
        this._itemDeleteButton.addEventListener('click', this._handleDeleteButtonClick);
        this._cardImage.addEventListener('click', () => this._handleOpenImage(this._data));
    }

    createElement() {
        const itemImage = this._itemElement.querySelector('.card__image');
       const itemTitle = this._itemElement.querySelector('.card__item-title');
       itemTitle.textContent = this._data.name;
       itemImage.src = this._data.link;
       itemImage.alt = this._data.name;

        this._setEventListeners();
        return this._itemElement;
   }
};