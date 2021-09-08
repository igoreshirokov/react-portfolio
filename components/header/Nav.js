import { useMediaQuery } from "react-responsive";

const DesktopNav = () => {
    return (
        <div className="desktop-nav">
            Desktop
        </div>
    )
}
const MobileNav = () => {
    return (
        <div className="mobile-nav">
            Mobile
        </div>
    )
}


export const Nav = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return (
        <nav>
            {isDesktop ? <DesktopNav /> : <MobileNav />}
        </nav>
    )
}