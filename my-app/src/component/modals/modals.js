import "./modals.css";

function Modal({ isOpen, onClose, title, children }) {
  return (
    <div
      className={isOpen ? "modal-overlay" : "modal-overlay hidden"}
      onClick={onClose}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Modal;