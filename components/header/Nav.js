
import React from 'react'
import { useMediaQuery } from "react-responsive";

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
    return (
        <div className="mobile-nav">
            Mobile
        </div>
    )
}


export function Nav() {
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

    return (
        <nav>
            {isDesktop && <div>
                <div className="desktop-nav">

                    <ul>
                        <li>Услуги</li>
                        <li>Работы</li>
                        <div className="vlinesmall"></div>
                        <li>Блог</li>
                        <li>Резюме</li>
                    </ul>
                </div>
            </div>}
            {
                !isDesktop && <div>
                    <div className="mobile-nav">
                        <div className="vlinesmall"></div>
                        <ul>
                            <li>Услуги</li>
                            <li>Работы</li>
                            <li>Блог</li>
                            <li>Резюме</li>
                        </ul>
                    </div>
                </div>
            }
        </nav >
    )
}

// export function Nav() {
//     const isDesktop = useMediaQuery({ minWidth: 992 });

//     return (
//         <nav>
//                         <ul>
//                 <li>Услуги</li>
//                 <li>Работы</li>
//                 <li>Блог</li>
//                 <li>Резюме</li>
//             </ul>
//         </nav>
//     )
// }



