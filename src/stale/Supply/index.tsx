import React, { useEffect, useState } from "react";
import { FiBarChart, FiEdit2, FiPlus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import { useHistory } from "react-router-dom";

import NavigationBar from "../../components/Navbar";

import api from "../../services/api";
import { CategoryContent, Container } from "./styles";
import ModalConfirmation from "../../components/Modals/ConfirmationModal";

interface Supplies {
  id: string;
  name: string;
  pricePerJob: number;
  created_at: Date;
  description: string;
  updated_at: Date;
}

export default function Supplies() {
  const [supplies, setSupplies] = useState<Supplies[]>();

  const history = useHistory();

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handlecloseNewTransactionsModal() {
    setIsNewTransactionModalOpen(false);
  }

  const fetchData = async () => {
    api.get(`/supplies`).then((response) => {
      setSupplies(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (!equipaments){
  //   return <p>Carregando....</p>
  // }

  return (
    <Container>
      <NavigationBar />
      <ModalConfirmation
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlecloseNewTransactionsModal}
      />
      <CategoryContent>
        <section></section>

        <table>
          <tr>
            <th>Nome da Categoria</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
          {supplies?.map((supply) => (
            <tr key={supply.id}>
              <td>
                {" "}
                <input type="checkbox" /> {supply.name}
              </td>
              <td>{supply.pricePerJob}</td>
              <td>
                <FiEdit2 size={22} />
                <AiOutlineDelete
                  size={22}
                  onClick={handleOpenNewTransactionsModal}
                />
              </td>
            </tr>
          ))}
        </table>
      </CategoryContent>
    </Container>
  );
}
