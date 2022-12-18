import React from 'react';
import PropTypes from "prop-types";
import s from './button.module.css';

function Button({ children, active, type, text, disabled, onClick }) {
    const activeBtn = active ? `${s.btn} ${s.active}` : s.btn;

    return (
        <button
            className={activeBtn}
            type={type}
            disabled={disabled}
            onClick={onClick}>
            <p className={s.text}>{text}</p>
            {children}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    active: PropTypes.bool
}

export default Button;