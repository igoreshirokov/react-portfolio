
import React, { useEffect, useState } from 'react'
import MediaQuery from "react-responsive";
import ContactsIcons from './ContactIcons';
import { NavButton } from './NavButton';
import Link from 'next/link';

const DesktopNav = () => {
    return (
        <div className="desktop-nav">
            <ul>
                <li>Услуги</li>
                <li>Работы</li>
                <li>Блог</li>
                <li>Резюме</li>
            </ul>
        </div>
    )
}
function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleFunc = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="mobile-nav">
            <div className="vlinesmall"></div>
            <NavButton open={menuOpen} toggleFunc={toggleFunc} />
            {menuOpen && <ul>
                <Link href="/services"><li>Услуги</li></Link>
                <li>Работы</li>
                <li>Блог</li>
                <li>Резюме</li>
                <ContactsIcons />
            </ul>}
        </div>
    )
}


export default function Nav() {



    return (
        <div className="nav">
            <MediaQuery minWidth={992}>
                <DesktopNav />
            </MediaQuery>
            <MediaQuery maxWidth={992}>
                <MobileNav />
            </MediaQuery>
        </div>
    )
}


