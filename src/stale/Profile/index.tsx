import React from 'react';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

const ProfilePage: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <div className="">
      <h1>Hello, {user.name}</h1>
      <h1>Hello, {user.id}</h1>
    </div>
  );
};

export default ProfilePage;
