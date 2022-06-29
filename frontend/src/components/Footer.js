import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <h3>
            <Col className="text-center py-3">Copyright &copy; Note Zipper</Col>
          </h3>
          <Col className="text-center py-3"></Col>
          <h3>
            <Col className="text-center py-3">Developed by : Mradul Jain</Col>
          </h3>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
