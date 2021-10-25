export function ModalFullScreenImage({ children, functionClose }) {
  return (
    <div className="modalFulscreenImage">
      <div onClick={functionClose} className="button-close"></div>
      <div className="modalFulscreenImage_image">{children}</div>
    </div>
  );
}
