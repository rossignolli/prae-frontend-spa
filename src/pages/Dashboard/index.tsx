import React, {useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';



const Dashboard: React.FC = ()=>{

    const {signOut, user } = useAuth();
    const history = useHistory()


    


    console.log(user)

    return(
        <div className="">
            <h1>Hello, {user.name}</h1>
            <h1>Hello, {user.id}</h1>


            <Link to="/equipaments">
          <h3 style={{
            color: "#0070F3",
            }} >Ver todos os equipamentos</h3>
          </Link>

        </div>
    )
}

export default Dashboard;