import React from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Pending = () => {
  return (
    <Container className="text-center my-5">
      <Spinner
        variant="warning"
        animation="border"
        style={{ width: "4rem", height: "4rem" }}
        className="my-5"
      />
    </Container>
  );
};

export default Pending;
