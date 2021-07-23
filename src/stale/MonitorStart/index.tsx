import React, { useEffect, useState } from "react";
import {
  FiAlertTriangle,
  FiAlignLeft,
  FiBarChart,
  FiBell,
  FiDelete,
  FiEdit2,
  FiHardDrive,
  FiPlus,
} from "react-icons/fi";
import { MdDevices } from "react-icons/md";

import { Link, useHistory, useParams } from "react-router-dom";

import manProfile from "../../assets/temp_assets/man-profile.jpg";
import {
  ButtonPurple,
  ButtonPurpleInverted,
  GreenButton,
  SalmonButton,
} from "../../components/button/styles";
import NavigationBar from "../../components/Navbar";

// import { useAuth } from '../../hooks/AuthContext';
import api from "../../services/api";
import { MonitorContent, Container, ContenderHolder } from "./styles";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

interface Equipaments {
  created_at: Date;
  description: string;
  id: string;
  name: string;
  expired: boolean;
  updated_at: Date;
}

interface EquipamentParams {
  id: string;
}

const MonitorStart: React.FC = () => {
  const params = useParams<EquipamentParams>();
  const [equipament, setEquipament] = useState<Equipaments>();
  const [value, onChange] = useState(new Date());
  const history = useHistory();

  useEffect(() => {
    api.get(`equipaments/details/${params.id}`).then((response) => {
      setEquipament(response.data);
    });
  }, [params.id]);

  console.log(params.id);

  return (
    <Container>
      <NavigationBar />
      <MonitorContent>
        <ContenderHolder>
          <div className="svgdiv">
            <MdDevices fontSize={80} />
          </div>
          <h1>{equipament?.name}</h1>
          <DateTimePicker onChange={onChange} value={value} />
        </ContenderHolder>
      </MonitorContent>
    </Container>
  );
};

export default MonitorStart;
