import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContextProvider";
import { Button, Nav } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getClothesArtById } from "../../../../Data/data";



export default function ConfirmationView(props) {

   const {order,setOrder} = useContext(OrderContext);

    return  (
        <div>
       
       <div className="text-center mt-5">
       <GiConfirmed size={200} style={{color: "green"}} />
       </div>
    
          <div className="text-center mt-5">
            <h3>Ihre Spende wurde erfolgreich gemeldet!</h3>
            {order.type === "Abholung" ? (
          <p>
            Wir haben Ihre Spende erhalten und werden diese wie
            vereinbart abholen. Falls wir weitere Informationen benötigen, werden
            wir uns bei Ihnen melden.
          </p>
        ) : (
          <p>
            Wir haben Ihre Spende erhalten und freuen uns, dass Sie diese
            selbst abgeben werden. Falls wir weitere Informationen benötigen,
            werden wir uns bei Ihnen melden.
          </p>
        )}

            </div>

            <div className="mt-3 text-center">
        
        <ul type = "none">
        <h4>Details Ihrer Spende</h4>
         {order.cart.map((item, index) => {
            return (
              <li key={index}>
               <span className="fw-bold" > {item.number}x</span>  {getClothesArtById(item.item.clothesArts)},{"   "} {item.item.size}
                
              </li>
            );
         })}
        </ul>
        </div>

        <div className="text-center mt-5">
        <h4>Ziel Ihrer Spende</h4>
        <div>
          {order.area.name}
        </div>
          </div>

            <div className="text-center mt-5">
                
            <Button  variant="primary" >
            <Nav.Link href="/" > Zurück zur Startseite</Nav.Link>
            
          
        </Button>
                
          </div>
        </div>
      );
}