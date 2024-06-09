import { Col, Form, FormGroup, Row } from "react-bootstrap";


function TextField(props){

    

    return (
        <FormGroup className="mb-md-1" controlId={props.name}>
        <Row>
            <Col md= {2} className="align-middle" >
            <Form.Label className="fw-bold">{props.label}</Form.Label>
            </Col>
            <Col sm= {10} md= {6} lg= {5} >
            <Form.Control  type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
           {props.error && <p className="error-message" >{props.error}</p>}
            </Col>
        </Row>
       
      </FormGroup>
    )
}

TextField.defaultProps = {
    type: 'text'
};

export default TextField;