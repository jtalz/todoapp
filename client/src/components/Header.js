import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron fluid className="w-100">
      <Container>
        <h1>To Do App</h1>
        <p>
          This is a practice exercise where I am building a to do list using
          React, Node.js, Express, and MongoDB. <br />
          Hope you like it!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
