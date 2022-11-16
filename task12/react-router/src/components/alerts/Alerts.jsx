import ReactDOM from "react-dom";
import "./Alerts.css";

const Alerts = ({ alerts }) =>
  alerts.length > 0
    ? ReactDOM.createPortal(
        <div
          className="alerts-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          {alerts.map((alert, index) => (
            <div className={`alert ${alert.status}`} key={index}>
              <div className="alert-body">
                <p className="alert-text">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>,
        document.body
      )
    : null;

export default Alerts;
