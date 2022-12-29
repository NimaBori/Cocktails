import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <h2>This page did not find.</h2>
      <Link to="/">Back to home page...</Link>
    </Container>
  );
};

export default Error;
