import { useState } from 'react';

export const NavButton = ({ toggleFunc }) => {
    const isOpen = useState(false);

    return (
        <div onClick={toggleFunc} className="nav-button ">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
