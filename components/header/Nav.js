import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import ContactsIcons from "./ContactIcons";
import { NavButton } from "./NavButton";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="desktop-nav">
      <ul>
        <Link href="/services">
          <li>Услуги</li>
        </Link>
        <Link href="/works">
          <li>Работы</li>
        </Link>
        <Link href="/blog">
          <li>Блог</li>
        </Link>
        <Link href="/resume">
          <li>Резюме</li>
        </Link>
      </ul>
    </div>
  );
};


function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleFunc = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-overflow-hidden");
    }
    return () => {
      document.body.classList.remove("body-overflow-hidden");
    };
  }, [menuOpen]);


  return (
    <div className="mobile-nav">
      <div className="vlinesmall"></div>
      <NavButton open={menuOpen} toggleFunc={toggleFunc} />
      {menuOpen && (
        <ul>
          <Link href="/services">
            <li>Услуги</li>
          </Link>
          <Link href="/works">
            <li>Работы</li>
          </Link>
          <Link href="/blog">
            <li>Блог</li>
          </Link>
          <Link href="/resume">
            <li>Резюме</li>
          </Link>
          <ContactsIcons />
        </ul>
      )}
    </div>
  );
}

export default function Nav() {
  return (
    <div className="nav">
      <div className="topline">
        <div className="glinescreen"></div>
        <div className="vlinecenter"></div>
        <Link href="/">
          <div className="tlogo">
            <div className="tlogo-gline"></div>
            <div className="tlogo-vline"></div>
          </div>
        </Link>
      </div>
      <MediaQuery minWidth={992}>
        <DesktopNav />
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <MobileNav />
      </MediaQuery>
    </div>
  );
}
