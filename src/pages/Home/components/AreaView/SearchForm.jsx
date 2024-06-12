import { Col, Form, Row } from "react-bootstrap";
import ShowTypeButton from "./ShowTypeButton";
import { useContext } from "react";
import { kriesen } from "../../../../Data/data";
import { AreaContext } from "../../../../context/AreaContextProvider";

export default function SearchForm(props) {
    
    let {formState,setFormState} = useContext(AreaContext);


    function onOptionChanged(event){
        setFormState((previus) => {
             return {...previus, selectedOption: event.target.value};
        });

       
    }

    function onDisplayTypeChanged(){
        setFormState((previus) => {
            return {...previus, isList: !previus.isList};
        });
    }


    function onTextChange(event){
      const text = event.target.value;
     setFormState((previus)=> {return {...previus, search:text };})
    }

    return  <div className="border p-2 rounded" >
    <Row  className="px-2" >
  
   
  <Col className="" xs= {12}  md={6} lg={7} >
  <Form.Label className="d-inline ms-1 fw-bold">Suchen</Form.Label>
  <Form.Control type="text" placeholder="Suchen Sie bestimmten Gebiet" onChange={onTextChange}  />
  </Col>
  
  <Col className=" mt-2 mt-sm-2 mt-md-0" xs= {10}  md ={4} lg={3} >
  <Form.Label form="kriese" className="d-inline ms-1 fw-bold"  >Filtern</Form.Label>
  <Form.Select id="kriese" aria-label="kriese" defaultValue={formState.selectedOption} onChange={onOptionChanged  }  >
    
    {kriesen.map((kriese) => {
      
        return <option key={kriese.id} value={kriese.id}>{kriese.name}</option>
    })}

  </Form.Select> 
  
  
  
     </Col  >

   <ShowTypeButton onDisplayTypeChanged = {onDisplayTypeChanged} isList = {formState.isList} search = {formState.search} ></ShowTypeButton>
  
  </Row>
    </div>;
}