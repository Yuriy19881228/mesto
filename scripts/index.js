import { Card } from "./Card.js";
import { initialCards } from "./data.js";
import { FormValidator } from "./FormValidator.js";
const popupProfile = document.querySelector(".popup_type_edit");
const popupOpenProfileButton = document.querySelector(".profile__edit-button");
const popupSaveButtonElement = document.querySelector(".popup__button-save");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_form_name");
const jobInput = document.querySelector(".popup__input_form_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const popupOpenAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add-card");
const formAdd = document.querySelector('[name="add_form"]');
const popupAddTitle = popupAdd.querySelector(".popup__input_form_title");
const popupAddLink = popupAdd.querySelector(".popup__input_form_link");
const KEY_ESC = "Escape";
const cards = document.querySelector(".cards");
const popupCloseButtons = document.querySelectorAll(".popup__button-exit");
const formElementAdd = document.querySelector('[name="add_form"]');

const popupCard = document.querySelector(".popup_type_image-preview");
const popupCardImage = popupCard.querySelector(".popup__card-image");
const popupCardText = popupCard.querySelector(".popup__card-text");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visibility",
};


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
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
});

function handleImageClick(data) {
  popupCardText.textContent = data.name;
  popupCardImage.src = data.link;
  popupCardImage.alt = data.name;
  openPopup(popupCard);
}


function createCard(data) {
  const item = new Card(data, "#card-template", handleImageClick);
  return item.createElement();
}

function render(data) {
  cards.prepend(createCard(data));
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
