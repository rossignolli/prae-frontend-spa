import Modal from "react-modal";
import * as S from "./styles";
import Button from "../../Button";
import Sucess from "../../../assets/svgs/sucess_modal_type.svg";
import Warning from "../../../assets/svgs/warning_modal_type.svg";
import Error from "../../../assets/svgs/error_modal_type.svg";
import Info from "../../../assets/svgs/info_modal_type.svg";

interface NewTranctionModalProps {
  isOpen: boolean;
  onRequestCancel: () => void;
  onRequestConfirmation?: () => void;
  title?: string;
  description?: string;
  type?: "warning" | "error" | "sucess" | "info";
  buttons?: boolean;
}

export default function ConfirmationModal({
  isOpen,
  title,
  description,
  type = "warning",
  buttons = false,
  onRequestCancel,
  onRequestConfirmation,
}: NewTranctionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestCancel}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <S.ContainerModal>
        <S.IconContainer>
          {type === "sucess" && <img src={Sucess} alt="Sucess" />}
          {type === "warning" && <img src={Warning} alt="Warning" />}
          {type === "error" && <img src={Error} alt="Error" />}
          {type === "info" && <img src={Info} alt="Info" />}
        </S.IconContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalDescription>{description}</S.ModalDescription>
        <S.ButtonHolder>
          {buttons ? (
            <>
              <Button
                type="button"
                customColor="#E1F5EC"
                onClick={onRequestConfirmation}
              >
                Aceitar
              </Button>
              <Button
                type="button"
                customColor="#F5E9EC"
                onClick={onRequestCancel}
              >
                Cancelar
              </Button>
            </>
          ) : (
            <Button
              type="button"
              customColor="#E1F5EC"
              onClick={onRequestCancel}
            >
              OK
            </Button>
          )}
        </S.ButtonHolder>
      </S.ContainerModal>
    </Modal>
  );
}
