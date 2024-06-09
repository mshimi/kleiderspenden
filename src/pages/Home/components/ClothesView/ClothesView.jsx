import {
 Container,
} from "react-bootstrap";
import ViewHeader from "../DeliveryOptionsView/ViewHeader";
import { IoGrid } from "react-icons/io5";
import { types, categories, getCatigoriesByType, getCategoryById, getClothesArtById } from "../../../../Data/data";
import { useContext, useState } from "react";
import ClothesForm from "./ClothesForm";
import { OrderContext } from "../../../../context/OrderContextProvider";
import { Cart } from "./Cart";
import { ViewButtons } from "../DeliveryOptionsView/ViewButtons";

export function ClothesView(props) {


    const [hasError, setHasError] = useState(false);    
    
   const {order} = useContext(OrderContext);
 

  return (
    <Container fluid style={{}} className="">
     <ViewHeader
  title="Fügen Sie Ihre Kleiderspende hinzu"
  description="Ihre Kleiderspende kann das Leben vieler Menschen verändern. Wählen Sie die Artikel aus, die Sie spenden möchten. Ob es sich um Herren-, Damen- oder Kinderkleidung handelt, jede Spende zählt und bringt uns einen Schritt näher, denen zu helfen, die in Not sind."
/>



      <ClothesForm></ClothesForm>

     <Cart></Cart>
     <ViewButtons errorMessage= {"Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie fortfahren"}  hasError = {hasError && order.cart.length === 0 } back = {()=> {props.back();}}  next = {()=> {
            if(order.cart.length > 0){
                setHasError(false);
                if(order.type === "Selbstabgabe"){
                    props.next(2);
                } else {
                    props.next();
                }
            }else{
                setHasError(true);
            }
     }} />
    </Container>
  );
}
