import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import InputSearch from '../components/InputSearch';
import UserInfo from '../components/UserInfo';
import NotFound from '../components/NotFound';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const searchUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
      setNotFound(false);
    } catch (error) {
      setUserData(null);
      setNotFound(true);
    }
  };

  return (
    <Container>
      <InputSearch onSearch={searchUser} />
      {userData && <UserInfo user={userData} />}
      {notFound && <NotFound />}
    </Container>
  );
};

export default Home;