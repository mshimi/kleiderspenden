import { useContext, useState } from "react";
import { StartingView } from "./components/StartingView/StartingView";
import DeliveryOptionsView from "./components/DeliveryOptionsView/DeliveryOptionsView";
import OrderContextProvider, { OrderContext } from "../../context/OrderContextProvider";
import AreaView from "./components/AreaView/AreaView";
import { ClothesView } from "./components/ClothesView/ClothesView";
import ConfirmationView from "./components/ConfirmationView/ConfirmationView";
import ReviewView from "./components/ReviewView/ReviewView";
import AddressView from "./components/AddressView/UserInfoView";
import { Step, Stepper } from "react-form-stepper";
import UserInfoView from "./components/AddressView/UserInfoView";

export default function Home() {
  const [step, setSetp] = useState(0);


  function next(value = 1) {
    setSetp((previus) => {
      return previus + value;
    });
  }
  function back(value = 1) {
    setSetp((previus) => {
      return previus - value;
    });
  }

  function goToStep(value) {
    setSetp(value);
  }

  function currentView(step) {
    switch (step) {
      case 0:
        return <StartingView onStart={()=> {next();}} />;
      case 1:
        return <DeliveryOptionsView next={next} back={back} />;
      case 2:
        return <AreaView next={next} back={back} />;
      case 3:
        return <ClothesView next={next} back={back} />;

      case 4:
        return <UserInfoView next={next} back={back} />;


      case 5:
        return <ConfirmationView next={next} back={back} />;
      default:
        return <StartingView onStart={next} />;
    }
  }


  return (
    <OrderContextProvider step = {step} goTo = {goToStep}>
    
      <div>
      
        {currentView(step)}</div>
    </OrderContextProvider>
  );
}
