import React from 'react';

function InfoTooltip({ status, onClose }) {
    const statusImage = String(status.link);

    return (
        <div className='info-tool'>
            <button type="button" className="popup__close-icon button" aria-label="Закрыть окно" onClick={onClose}></button>
            <div class='info-tool__container'>
                <img className='info-tool__icon' alt="Иконка регистрации" src={statusImage}/> 
                <p className='info-tool__text'>{status.text}</p>
            </div>
        </div>
    )
    }
    
    export default InfoTooltip;