
import { Button, Col, Image, Row } from "react-bootstrap";
import logo from "../../../../assets/logo.png";

 export function StartingView(props) {




    return (
      <div>
        <Row className="" style={{}}>
          <Col lg={6} className="p-5 d-none d-lg-block">
          <Image src={logo} fluid={true} className=""></Image>
          </Col>
          <Col lg={6} className="p-3 text-center ">
            <div className="mt-lg-5 mb-lg-5">
              <h1 className=" display-3 fw-bold  ">LächelnMacher</h1>
            </div>
  
            <Image
            
              style={{ height: "150px", width: "150px" }}
              className="d-lg-none my-3  "
              src={logo}
            ></Image>
            <p className="px-xl-5 px-md-3" >
              
              ist eine Wohltätigkeitsorganisation, die sich darauf konzentriert,
              gebrauchte Kleidung von der Gemeinschaft anzunehmen und sie an
              bedürftige Personen weiterzugeben. Diese Vereine spielen eine
              wichtige Rolle bei der Unterstützung von Obdachlosen, Menschen in
              Armut und anderen Bedürftigen, sowie auch Menschen in Kriegsgebieten
              und von Naturkatastrophen betroffenen Gebieten. Durch die
              Wiederverwendung von Kleidung fördern sie auch Recycling und
              Nachhaltigkeit. Kleiderspende-Vereine arbeiten oft eng mit lokalen
              Gemeinden und anderen Organisationen zusammen, um positive
              Veränderungen zu bewirken und Menschen in Not zu helfen.
            </p>
            
          </Col>
        </Row>
  
        <div className=" text-center py-auto px-auto mt-5">
          <Button onClick={props.onStart} variant="dark">Jetzt Spenden</Button>
        </div>
     </div>
    );
  }