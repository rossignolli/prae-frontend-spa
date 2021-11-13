import Modal from 'react-modal';
import * as S from './styles';
import { useState } from 'react';
import { format, formatISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import Button from '../../Button';
import Header from '../../Header';
import { ThreeDots } from 'react-loading-icons';

interface NewTranctionModalProps {
  isOpen: boolean;
  onRequestCancel: () => void;
  onRequestConfirmation: (date: string) => void;
  title?: string;
  description?: string;
  type?: 'warning' | 'error' | 'sucess' | 'info';
  isLoading?: boolean;
  initialDate?: Date;
}

export default function SelectDateMonitorModal({ isOpen, onRequestCancel, onRequestConfirmation, isLoading }: NewTranctionModalProps) {
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestCancel} overlayClassName="react-modal-overlay" className="react-modal-content" ariaHideApp={false}>
      <S.ContainerModal>
        <Header title="Defina a data" description="Selecione a data em que ações deveram ser iniciadas" />
        <DatePickerCalendar locale={ptBR} date={startDate} onDateChange={date => setStartDate(date)} minimumDate={new Date(Date.now())} />
        <S.ButtonHolder>
          <p>Data selecionada: {startDate ? format(startDate, 'dd MMM yyyy', { locale: ptBR }) : 'none'}.</p>
        </S.ButtonHolder>
        <S.ButtonHolder>
          <Button type="button" customColor="#F5E9EC" onClick={onRequestCancel}>
            Cancelar
          </Button>
          <Button type="button" customColor="#E1F5EC" onClick={() => onRequestConfirmation(formatISO(startDate))}>
            {isLoading ? <ThreeDots style={{ width: `42px` }} /> : ` Confirmar Data`}
          </Button>
        </S.ButtonHolder>
      </S.ContainerModal>
    </Modal>
  );
}
