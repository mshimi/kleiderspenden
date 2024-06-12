
import {  kriesen } from "../../../../Data/data";
import { useContext} from "react";
import { AreaContext } from "../../../../context/AreaContextProvider";
import { AreasAsList } from "./AreasAsList";
import { AreasAsGrid } from "./AreasAsGrid";

export function Areas (props){




     const {formState,setFormState} =  useContext(AreaContext);


  
 
    function getKriesen(){
        if(formState.selectedOption === "0"){
            return kriesen;
        } else {
            return kriesen.filter((kriese) => kriese.id === formState.selectedOption);
        }
    }

    

    return <div style={{ }} className="my-3">


    {
        formState.isList && formState.search === "" ? <AreasAsList kriesen = {getKriesen()} /> : <AreasAsGrid/>
    }

</div>;
}