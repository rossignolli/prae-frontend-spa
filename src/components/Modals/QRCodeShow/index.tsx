import Modal from 'react-modal';
import * as S from './styles';
import { useState } from 'react';
import { format, formatISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import Button from '../../Button';
import Header from '../../Header';
import QRCode from 'qrcode.react';

import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <div></div>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

interface NewTranctionModalProps {
  isOpen: boolean;
  onRequestCancel?: () => void;
  onRequestConfirmation?: (date: string) => void;
  title?: string;
  description?: string;
  type?: 'warning' | 'error' | 'sucess' | 'info';
  buttons?: boolean;
}

export default function QRCodeModal({ isOpen, onRequestCancel, onRequestConfirmation }: NewTranctionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestCancel} overlayClassName="react-modal-overlay" className="react-modal-content" ariaHideApp={false}>
      <S.ContainerModal>
        <Header title="QR CODE" description="Esse QR code foi gerado para facilitar identificação de seus equipamentos." />
        <S.QRCodeContainer>
          <QRCode value="hello world" />
        </S.QRCodeContainer>
        <S.ButtonHolder>
          <Button type="button" customColor="#E1F5EC" onClick={() => null}>
            Fechar
          </Button>
          <Button type="button" customColor="#F5E9EC" onClick={onRequestCancel}>
            <PDFDownloadLink document={<MyDocument />} fileName="newpdf.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Carregando PDF...' : ' Baixar PDF')}
            </PDFDownloadLink>
          </Button>
        </S.ButtonHolder>
      </S.ContainerModal>
    </Modal>
  );
}
