import { Container } from "react-bootstrap";
import ViewHeader from "../DeliveryOptionsView/ViewHeader";
import logo from "../../../../assets/logo.png";

import SearchForm from "./SearchForm";

import { Areas } from "./Areas";
import AreaContextProvider from "../../../../context/AreaContextProvider";
import { ViewButtons } from "../DeliveryOptionsView/ViewButtons";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../context/OrderContextProvider";
export default function AreaView(props) {
  const { order, setOrder } = useContext(OrderContext);
  const [hasError, setHasError] = useState(false);

  return (
    <AreaContextProvider>
      <Container style={{}} fluid className="position-relative">
        <ViewHeader
          title="Entscheiden Sie, wohin Ihre Spende gehen soll"
          description="Ihre Entscheidung für ein bestimmtes Gebiet ermöglicht es uns, unsere Hilfe gezielt und effektiv einzusetzen. Jedes ausgewählte Gebiet hat spezifische Bedürfnisse, und Ihre Wahl hilft uns, diese Bedürfnisse bestmöglich zu erfüllen. Egal, ob es sich um die Bereitstellung von Nahrungsmitteln, medizinischer Versorgung oder Notunterkünften handelt, Ihre Spende macht einen Unterschied."
        />

        <SearchForm></SearchForm>

        <Areas></Areas>
      </Container>

      <div className="  ">
        <ViewButtons
          next={() => {
            if (order.area !== undefined) {
              props.next();
            } else {
              setHasError(true);
            }
          }}
          back={()=> {props.back()}}
          errorMessage={"Bitte wählen Sie ein Gebiet aus, in dem Ihre Spende helfen soll."}
          hasError={hasError}
        />
      </div>
    </AreaContextProvider>
  );
}
