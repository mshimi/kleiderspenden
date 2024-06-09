import { Accordion, AccordionHeader, Row } from "react-bootstrap";
import { AreaCard } from "./AreaCard";
import { areas } from "../../../../Data/data";

export function AreasAsList(props){


    return <Accordion defaultActiveKey= { []}  alwaysOpen = {true}  className="">
   
    {
       props.kriesen.map((kriese)=> {

            if(kriese.id === "0"){
                return null;
            }

            return (
              <Accordion.Item key={kriese.id} eventKey={kriese.id}   >
              <AccordionHeader>{kriese.name}</AccordionHeader>
                <Accordion.Body>
                    <Row className="g-3">
                        {
                            areas.filter((area) => area.kriese === kriese).map(area=> {
                               return <AreaCard key = {area.id} area = {area}></AreaCard> ;
                            })
                        }
                    </Row>
                    </Accordion.Body>
              </Accordion.Item>
             
            );})}
        
        </Accordion>;
}