export default function ModalWindow({ children, functionClose }) {
    return (
        <div className="modal-window">
            <div className="modal-header">
                <div className="vlinecenter"></div>
            </div>
            <div onClick={functionClose} className="button-close"></div>

            {children}

            <div className="modal-footer">
                <div className="footer-vline"></div>
            </div>
        </div>
    )
}