import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../pages/index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Register from './Register';
import Login from './Login';
import InfoTooltip from './InfoTooltip';

import { CurrentUserContext } from './CurrentUserContext';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // хандлеры изменения стейт переменных
    function handleCardClick(card) {
        setSelectedCard(card);
    };

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    };

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    };

    // хандлеры для вызова API методов

    function handleUpdateAvatar(userData) {
        setIsLoading(true);
        api.setNewAvatar(userData)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    function handleUpdateUser(userData) {
        setIsLoading(true);
        api.setUserInfo(userData)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    function handleAddPlaceSubmit(card) {
        setIsLoading(true);
        api.addNewCard(card.name, card.link)
            .then((card) => {
                setCards([card, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // закрытие всех попапов

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                    <Routes>
                        <Route exact path="/" element={<Main 
                        onEditProfile={handleEditProfileClick} 
                        onAddPlace={handleAddPlaceClick} 
                        onEditAvatar={handleEditAvatarClick} 
                        onCardClick={handleCardClick} 
                        cards={cards} 
                        onCardLike={handleCardLike} 
                        onCardDelete={handleCardDelete} />} />
                        <Route path="/sign-up" element={<Register />} />
                        <Route path="/sign-in" element={<Login />} />
                    </Routes>
                <Footer />
                <EditProfilePopup 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups} 
                onUpdateUser={handleUpdateUser} 
                isLoading={isLoading} />
                <EditAvatarPopup 
                isOpen={isEditAvatarPopupOpen} 
                onClose={closeAllPopups} 
                onUpdateAvatar={handleUpdateAvatar} 
                isLoading={isLoading} />
                <AddPlacePopup 
                isOpen={isAddPlacePopupOpen} 
                onClose={closeAllPopups} 
                onAddPlace={handleAddPlaceSubmit} 
                isLoading={isLoading} />
                <ImagePopup 
                card={selectedCard} 
                onClose={closeAllPopups} />
                <InfoTooltip
                onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
