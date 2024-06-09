import { Button } from "react-bootstrap";

 export default function DeliveryOptionCard({props, onSelected }) {
    
    const titel = props.titel;


    return ( 
        <div className="d-grid gap-2">
      <Button onClick = {()=>{
            onSelected(titel);
        
      }} variant= {!props.isSelected ? "secondary" : "success"} size="lg">
        
            {props.icon}
            <p className="fs-1 fw-bolder  text-uppercase"> {props.titel}</p>

            <p className="fs-sm-6 fs-lg-5 fw-light"> {props.description}</p>

            <div className="d-none d-lg-block text-start">
                {props.plusPoints}
            </div>
      </Button>
     
    </div>
  );
        
    
}