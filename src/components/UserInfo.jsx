import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const UserInfo = ({ user }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.location}</Card.Text>
          <Button href={user.html_url} target="_blank" style={{ borderRadius: '50px' }} variant="primary">
            View Profile
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserInfo;