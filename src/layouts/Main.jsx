import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import backgroundImage from "../../public/Rectangle 1.png"
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
      <Row>
        <Col lg={4}>
          <LeftNav></LeftNav>
        </Col>
        <Col lg={8} >
      <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
      <Footer></Footer>
     
    </div>
  );
};

export default Main;
