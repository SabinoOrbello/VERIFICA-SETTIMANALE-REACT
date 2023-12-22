import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = (props) => (
  <footer className="bg-dark text-white">
    <Container>
      <Row className="mb-3 mt-3 pt-3 text-danger">
        <h3>Miglior piattaforma streaming</h3>
      </Row>
      <Container>
        <Row className="justify-content-center">
          <Col lg={2}>
            <h4>Contatti</h4>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>Segna Posto</li>
              <li>Segna Posto</li>
              <li>Segna Posto</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4>A proposito di noi</h4>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>Segna Posto</li>
              <li>Segna Posto</li>
              <li>Segna Posto</li>
            </ul>
          </Col>
          <Col lg={2}>
            <h4>Domande</h4>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>Segna Posto</li>
              <li>Segna Posto</li>
              <li>Segna Posto</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  </footer>
);

export default MyFooter;
