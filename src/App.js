import React from 'react';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';

function App() {
  return (
    <Container>
      <h1 className="text-center m-4">Github User Search App</h1>
      <Home />
    </Container>
  );
}

export default App;