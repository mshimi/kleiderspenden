import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { FaListUl } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";



export default function ShowTypeButton(props) {





  return (
    <Col className="ms-auto " style={{ alignSelf: "end" }} xs={2}>
      <Button className=" py-auto align-middle text-center" variant="light" onClick={props.onDisplayTypeChanged}>

        {props.isList && props.search === "" ? <FaListUl /> : <IoGrid />
}
      

      </Button>
    </Col>
  );
}
