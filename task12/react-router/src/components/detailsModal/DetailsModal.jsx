import ReactDOM from "react-dom";
import "./DetailsModal.css";

const Modal = ({ isShowing, hide, modalData, deletePost }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            data-testid="detailsModal"
          >
            <div className="modal">
              <div className="modal-body">
                <h3 className="modal-title">{modalData.title}</h3>
                <p className="modal-text">{modalData.body}</p>
                <div className="modal-buttons">
                  <button className="btn" onClick={() => deletePost(modalData.id)}>Delete</button>
                  <button className="btn" onClick={hide}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
