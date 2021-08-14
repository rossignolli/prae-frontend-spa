import Modal from "react-modal";
import * as S from "./styles";
import Button from "../../Button";
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

      <S.ContainerModal>
        <S.ModalTitle>Esse equipamento já está sendo monitorado.</S.ModalTitle>
        <S.ModalDescription>
          Caso deseje editar o ciclo de monitoramento, clique em editar.
        </S.ModalDescription>
        <S.ButtonHolder>
          <Button>Aceitar</Button>
          <Button>Rejeitar</Button>
        </S.ButtonHolder>
      </S.ContainerModal>
    </Modal>
  );
}
