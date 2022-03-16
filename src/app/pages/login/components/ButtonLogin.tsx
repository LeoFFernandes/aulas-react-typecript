import React from 'react';
import './button.css'

interface IButtonLoginProps{
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}


export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children}) => {
    return(
        <button 
        className="button-login"
        type={type} 
        onClick={onClick}
        >{children}</button>
    )
}