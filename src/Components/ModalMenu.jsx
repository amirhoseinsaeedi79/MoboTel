
import ReactDOM from "react-dom";
export default function ModalMenu() {
  return ReactDOM.createPortal(
    <div className="modal-parent direction"></div>,
    document.getElementById("modals-parent")
  );
}
