const popup = document.querySelector("popup");
const popupProfile = document.querySelector(".popup_form_edit");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupSaveButtonElement = document.querySelector(".popup__button-save");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_form_name");
const jobInput = document.querySelector(".popup__input_form_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_card_add');
const formAdd = popupAdd.querySelector('.popup__form');
const popupAddTitle = popupAdd.querySelector('.popup__input_form_title');
const popupAddLink = popupAdd.querySelector('.popup__input_form_link');
const popupButtonCreate = popupAdd.querySelector('.popup__button-save');
const KEYESC = 'Escape';
const closePopupEsc = (evt) => {
  if (evt.key === KEYESC) {
    closePopup(document.querySelector(`.popup_is-opened`));
  }
};
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    closePopup(e.target);
  }
});


popupOpenButtonElement.addEventListener('click', function() {              
  openPopup(popupProfile);                                       
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
popupOpenAddButton.addEventListener('click', function() {
  openPopup(popupAdd);
});

function openPopup(popup) {
  document.addEventListener('keydown', closePopupEsc);
  popup.classList.add('popup_is-opened');
} 


function closePopup(popup) {
  document.removeEventListener('keydown', closePopupEsc);
  popup.classList.remove('popup_is-opened');
}
const handlePopupClose = (evt) => {
    const isOverlay = evt.target.classList.contains("popup");
    const isClose = evt.target.classList.contains("popup__button-exit");
    if (isOverlay || isClose) {
      closePopup();
    }
};

const popupCloseButton = document.querySelectorAll('.popup__button-exit');

popupCloseButton.forEach(closeButton => {
  const popup = closeButton.closest('.popup');
  closeButton.addEventListener('click', () => closePopup(popup));
});



function handleFormSubmit (evt) {
   evt.preventDefault();
   profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
   closePopup(popupProfile);
}



formElement.addEventListener('submit', handleFormSubmit);

const cards = document.querySelector('.cards');

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


const popupCard = document.querySelector('.popup-card');
const popupCardImage = popupCard.querySelector('.popup-card__image');
const popupCardText = popupCard.querySelector('.popup-card__text');
const popupOpenCard = document.querySelector('.popup-card');

function openImagePopupCard (image, text) {
    popupCardImage.setAttribute('src', image);
    popupCardText.textContent = text;
    popupCardImage.setAttribute('alt', text);
    openPopup(popupCard);

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
      console.log(like);
    });
    
    cardElement.querySelector('.card__delete-button').addEventListener('click', function (del) {
      del.target.closest('.card').remove();
    });
    cardImage.addEventListener('click', function (event) {
      openImagePopupCard(src, alt);
  });
    
    return cardElement;
  }
  function addNewCard(src, alt) {
    const card = createCard(src, alt);
    cards.prepend(card);
  }

  initialCards.forEach(function (card) {
    addNewCard(card.link, card.name);
  });

  function saveNewCard(evt) {
    evt.preventDefault();
    const name = popupAddTitle.value;
    const linkImage = popupAddLink.value;
    addNewCard(linkImage, name);
    closePopup(popupAdd);
    evt.target.reset();
  }
  
  formAdd.addEventListener('submit', saveNewCard);

  
 