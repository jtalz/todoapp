import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ onClose }) => {
  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        There's been an error performing this operation. You may be having
        trouble connecting to the server. <br /> Please refresh and try again.
      </p>
    </Alert>
  );
};

export default ErrorAlert;
