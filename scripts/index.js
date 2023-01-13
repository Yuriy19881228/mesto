import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";
const popupProfile = document.querySelector(".popup_form_edit");
const popupOpenProfileButton = document.querySelector(".profile__edit-button");
const popupSaveButtonElement = document.querySelector(".popup__button-save");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_form_name");
const jobInput = document.querySelector(".popup__input_form_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const popupOpenAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_card_add");
const formAdd = document.querySelector('[name="add_form"]');
const popupAddTitle = popupAdd.querySelector(".popup__input_form_title");
const popupAddLink = popupAdd.querySelector(".popup__input_form_link");
const KEY_ESC = "Escape";
const cards = document.querySelector(".cards");
const popupCloseButtons = document.querySelectorAll(".popup__button-exit");
const formElementAdd = document.querySelector('[name="add_form"]');

const popupCard = document.querySelector(".popup-card");
const popupCardImage = popupCard.querySelector(".popup-card__image");
const popupCardText = popupCard.querySelector(".popup-card__text");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visibility",
};

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const validationPopupProfile = new FormValidator(config, popupProfile);
validationPopupProfile.enableValidation();

const validationPopupAdd = new FormValidator(config, formAdd);
validationPopupAdd.enableValidation();

const closePopupEsc = (evt) => {
  if (evt.key === KEY_ESC) {
    closePopup(document.querySelector(`.popup_is-opened`));
  }
};
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    closePopup(e.target);
  }
});
function openPopup(popup) {
  document.addEventListener("keydown", closePopupEsc);
  popup.classList.add("popup_is-opened");
}
function closePopup(popup) {
  document.removeEventListener("keydown", closePopupEsc);
  popup.classList.remove("popup_is-opened");
}
popupCloseButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => closePopup(popup));
});

initialCards.forEach(render);

popupOpenProfileButton.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

function handleImageClick(data) {
  popupCardText.textContent = data.name;
  popupCardImage.src = data.link;
  popupCardImage.alt = data.name;
  openPopup(popupCard);
}

function render(data) {
  const item = new Card(data, "#card-template", handleImageClick);
  const newItem = item.createElement();
  cards.prepend(newItem);
}

popupOpenAddButton.addEventListener("click", () => {
  validationPopupAdd.resetFormErrors();
  openPopup(popupAdd);
});
formElement.addEventListener("submit", function submitformHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
});

formElementAdd.addEventListener("submit", function submitformHandler(evt) {
  evt.preventDefault();

  const newcard = {
    name: popupAddTitle.value,
    link: popupAddLink.value,
  };

  render(newcard);
  closePopup(popupAdd);
  formElementAdd.reset();
});
