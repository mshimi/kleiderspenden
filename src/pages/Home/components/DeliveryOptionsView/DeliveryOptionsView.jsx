import {
  Button,
  Col,

  Row,
} from "react-bootstrap";
import { FaBox,  FaTruck } from "react-icons/fa";
import {  useContext, useState } from "react";
import DeliveryOptionCard from "./DeliveryOptionCard";
import { OrderContext } from "../../../../context/OrderContextProvider";
import ViewHeader from "./ViewHeader";

export default function DeliveryOptionsView(props) {
  
 const {order,setOrder} = useContext(OrderContext);
  ;

  // const [deliveryOption, setDeliveryOption] = useState(order.type);
  const [hasError,setError] = useState(false);

  const deliveryOptions = [
    {
      titel: "Abholung",
      icon: <FaTruck size={100} className="d-block text-center mx-auto my-3" />,
      isSelected: order.type === "Abholung",
      description:
        "Nutzen Sie unseren bequemen Abholservice. Wir kommen zu Ihnen nach Hause und holen Ihre Kleiderspenden ab. Dieser Service ist ideal, wenn Sie keine Möglichkeit haben, Ihre Spenden selbst vorbeizubringen",
   
        plusPoints: (
          <ul style={{ listStyleType: "none", paddingLeft: "16px" }}>
              Ihre Vorteile
              <li style={{padding: "3px"}}>✔️ Bequemlichkeit</li>
              <li style={{padding: "3px"}}>✔️ Zeiteffizient</li>
              <li style={{padding: "3px"}}>✔️ Ideal für große Mengen</li>
              
          </ul>
      ),
      },
    {
      titel: "Selbstabgabe",
      icon: <FaBox size={100} className="d-block text-center mx-auto my-3" />,
      isSelected: order.type === "Selbstabgabe",
      description:
        "Bringen Sie Ihre Kleiderspenden direkt zu unserem Spendenzentrum. Dies ist eine großartige Möglichkeit, uns persönlich zu besuchen und sicherzustellen, dass Ihre Spenden sofort ankommen",
      plusPoints: (<ul style={{ listStyleType: "none", paddingLeft: "16px"  }}>
        Ihre Vorteile
      <li style={{padding: "3px"}}>✔️ Flexibilität</li>
      <li style={{padding: "3px"}}>✔️ Sofortige Spendenannahme</li>
      <li style={{padding: "3px"}}>✔️ Persönliche Interaktion</li>
  </ul>),
      
    },
  ];

  function onSelecetedChanged(option) {
    // setDeliveryOption(option);
    setOrder((prev)=> ({...prev, type: option}  ));
    console.log(order);
  }

  function showErrorMessage(){
   return hasError ? "d-block" : "d-none";
  }


 


  return (
    <div className="py-3 position-relative">
    

      <ViewHeader 
  title="Wählen Sie die Art der Abgabe Ihrer Kleiderspende"
  description=" Wir bieten Ihnen die Möglichkeit, Ihre Spende entweder persönlich vor Ort abzugeben oder unseren praktischen Abholservice zu nutzen. Entscheiden Sie selbst, welche Option am besten zu Ihnen passt." 
/>
    
      <Row>
        {deliveryOptions.map((option, index) => {
          return (
            <Col key={option.titel} xs={12} lg={6} className="text-center my-3">
              <DeliveryOptionCard
                props={option}
                onSelected={onSelecetedChanged}
              ></DeliveryOptionCard>
            </Col>
          );
        })}
      </Row>

      
 
      <div className=" text-center bottom-0  my-auto">
      <p style={{color: "red"}} className={` ${showErrorMessage()}`} >Bitte Wählen Sie die Art der Abgabe</p>
        <Button
          className="  p-2 me-2"
          onClick={()=> {
             props.back();
          
          }}
          variant="outline-danger"
        >
          zurück
        </Button>

        <Button
          className="p-2 ms-2"
          onClick={() => {
            
            if (order.type === undefined) {
              
              setError(true);
             
            } else {
              setError(false);
             
              props.next();
            }
            
          }}
          variant="outline-primary"
        >
          Weiter
        </Button>
      </div>
    </div>
  );
}
