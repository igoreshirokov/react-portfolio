export const NavButton = ({open, toggleFunc}) => {
    return (
        <div onClick={toggleFunc} className={`nav-button ${open ? 'nav-button__open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
