import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTranctionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ConfirmationModal({
  isOpen,
  onRequestClose,
}: NewTranctionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      ></button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <h1>Hello world</h1>
      </Container>
    </Modal>
  );
}
