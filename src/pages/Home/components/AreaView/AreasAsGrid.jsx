import { Row } from "react-bootstrap";
import { areas } from "../../../../Data/data";
import { AreaCard } from "./AreaCard";
import { useContext } from "react";
import { AreaContext } from "../../../../context/AreaContextProvider";

export function AreasAsGrid (){

      const  {formState, setFormState} =   useContext(AreaContext);

    return <div>
         <Row className="g-3">
                        {
                            areas.filter((area)=>{
                                if(formState.selectedOption === "0"){
                                    return area;
                                } else {
                                    return area.kriese.id === formState.selectedOption ;
                                }
                            }).filter((area) => {
                                if(formState.search !== ""){
                                    return area.name.toLocaleLowerCase().includes(formState.search);
                                }
                                else {
                                    return area;
                                }
                            }).map(area=> {
                               return <AreaCard key = {area.id} area = {area}></AreaCard> ;
                            })
                        }
                    </Row>
    </div>
}