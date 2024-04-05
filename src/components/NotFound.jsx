import React from 'react';
import { Image, Row } from 'react-bootstrap';
import notFoundImage from '../assets/404.gif';

const NotFound = () => {
  return (
    <Row className="justify-content-center h-25 w-100">
      <Image src={notFoundImage} className="h-25 w-50" alt="User not found" />
    </Row>
  );
};

export default NotFound;