import { createContext, useState } from "react";
import { Step, Stepper } from "react-form-stepper";

export const OrderContext = createContext();

export default function OrderContextProvider(props) {
  const [order, setOrder] = useState({
    type: null,
    address: null,
    date: new Date(),
    cart: [],
    area: null,
    notes: undefined,
  });

  function stepper(order) {
    if (props.step === 0 || props.step === 5) return;

    return (
      <div >
        <Stepper activeStep={props.step - 1}>
          <Step
            onClick={() => {
              props.goTo(1);
            }}
            label="Art der Abgabe"
            active={true}
          />
          <Step
            onClick={() => {
              props.goTo(2);
            }}
            label="Kriesengebiet"
            active={order.type}
          />
          <Step
            onClick={() => {
              props.goTo(3);
            }}
            label="Kleider"
            active={order.area}
          />

          {order.type === "Abholung" && (
            <Step
              onClick={() => {
                props.goTo(4);
              }}
              label="Adresse"
              active={order.cart.length > 0}
            />
          )}
          <Step
            label="Bestätigung"
            active={
              (order.type === "Abholung" && order.address) ||
              (order.type === "Selbstabgabe" && order.cart.length > 0)
            }
          />
        </Stepper>
      </div>
    );
  }

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <div>
        {stepper(order)}
        {props.children}
      </div>
    </OrderContext.Provider>
  );
}
