
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__button-exit");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupSaveButtonElement = document.querySelector(".popup__button-save");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_form_name");
const jobInput = document.querySelector(".popup__input_form_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup__add');
const formAdd = popupAdd.querySelector('.popup__form');
const popupAddTitle = popupAdd.querySelector('.popup__input_form_title');
const popupAddLink = popupAdd.querySelector('.popup__input_form_link');
const popupCloseAddButton = popupAdd.querySelector(".popup__button-exit");
const popupButtonCreate = popupAdd.querySelector('.popup__button-save');



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



const openPopup = function () {
    popupElement.classList.add("popup_is-opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


const closePopup = function () {
    popupElement.classList.remove("popup_is-opened");
}
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

const cards = document.querySelector('.cards');


const openPopupAdd = function () {
    popupAdd.classList.add("popup_is-opened");

}
const closePopupAdd = function () {
    popupAdd.classList.remove("popup_is-opened");
}
popupOpenAddButton.addEventListener("click", openPopupAdd);
popupCloseAddButton.addEventListener("click", closePopupAdd);

const popupCard = document.querySelector('#popup__card');
const popupCardImage = popupCard.querySelector('.popup__card-image');
const popupCardText = popupCard.querySelector('.popup__card-text');
const cardClose = popupCard.querySelector('.popup__button-exit');
const popupOpenCard = document.querySelector('#popup__card');
const openPopupCards = function () {
    popupOpenCard.classList.add("popup_is-opened");

}
const closePopupCards = function () {
  popupOpenCard.classList.remove("popup_is-opened");
}
cardClose.addEventListener("click", closePopupCards);

function openImagePopupCard (image, text) {
    openPopupCards();
    popupCardImage.setAttribute('src', image);
    popupCardText.textContent = text;
    popupCardImage.setAttribute('alt', text);
    
  }
  


  function createCard(src, alt) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate .querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
  
    cardImage.setAttribute('src', src);
    cardImage.setAttribute('alt', alt);
    cardElement.querySelector('.card__item-title').textContent = alt;
    
    cardElement.querySelector('.card__item-like-button').addEventListener('click', function (like) {
      like.target.classList.toggle('card__item-like-button_active');  
    });
    cardElement.querySelector('.card__delete-button').addEventListener('click', function (del) {
      del.target.closest('.card').remove();
    });
    cardImage.addEventListener('click', function (event) {
      openImagePopupCard(src, alt);
  });
    
    return cardElement;
  }
  function AddNewCard(src, alt) {
    const card = createCard(src, alt);
    cards.prepend(card);
  }

  initialCards.forEach(function (Add) {
    AddNewCard(Add.link, Add.name);
  });

  function saveNewCard(evt) {
    evt.preventDefault();
    const name = popupAddTitle.value;
    const linkImage = popupAddLink.value;
    AddNewCard(linkImage, name);
    evt.target.reset();
    closePopupAdd();
  }
  
  formAdd.addEventListener('submit', saveNewCard);
  