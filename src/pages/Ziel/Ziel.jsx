import { Col, Container, Row } from "react-bootstrap";
import { FaGlobe, FaHandsHelping, FaRecycle, FaRegSmile } from "react-icons/fa";

export default function Ziel() {
     return (<Container className="my-5">
<h1 className="text-center mb-4">Unsere Ziele</h1>
<Row className="text-center" >
  <Col lg={3} className="text-center">
    <FaHandsHelping size={50} />
    <h3>Hilfe leisten</h3>
    <p>
      Wir möchten bedürftigen Menschen durch die Sammlung und Verteilung von Kleiderspenden direkte Hilfe leisten.
    </p>
  </Col>
  <Col lg={3} className="text-center">
    <FaRegSmile size={50} />
    <h3>Freude schenken</h3>
    <p>
      Unsere Mission ist es, ein Lächeln auf die Gesichter der Menschen zu zaubern, die unsere Hilfe am meisten benötigen.
    </p>
  </Col>
  <Col lg={3} className="text-center">
    <FaRecycle size={50} />
    <h3>Nachhaltigkeit fördern</h3>
    <p>
      Durch das Recycling und die Wiederverwendung von Kleidung tragen wir zur Reduzierung von Abfall und zur Förderung der Nachhaltigkeit bei.
    </p>
  </Col>
  <Col lg={3} className="text-center">
    <FaGlobe size={50} />
    <h3>Gemeinschaft stärken</h3>
    <p>
      Wir möchten eine starke Gemeinschaft aufbauen, die sich gegenseitig unterstützt und gemeinsam für eine bessere Zukunft arbeitet.
    </p>
  </Col>
</Row>
</Container>
);
}