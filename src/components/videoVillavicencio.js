import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/ModalContext";
import ContainerModal from "./containerModal";

const modalRoot = document.getElementById("modalVideo");

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default function Modal() {
  // { modal, setModal }
  const { modal } = useContext(ModalContext);
  if (modal) {
    return (
      <ModalPortal>
        <ContainerModal
        // setModal={setModal}
        />
      </ModalPortal>
    );
  }
  return null;
}
