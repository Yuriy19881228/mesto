const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-btn');
const popupOpenButtonElement = document.querySelector('.profile__edit-btn');
const formElement = popupElement.querySelector('.popup__content');
const likeElement =  document.querySelector('.element__like')
const nameInput = popupElement.querySelector('.popup__name');
const jobInput = popupElement.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');



const openPopup = function () {
    popupElement.classList.add('popup__is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


const closePopup = function () {
    popupElement.classList.remove('popup__is-opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

const likeCard = function () {
    likeElement.classList.toggle('element__like_active');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
likeElement.addEventListener('click', likeCard);