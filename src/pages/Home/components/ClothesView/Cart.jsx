import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { OrderContext } from "../../../../context/OrderContextProvider";
import { getCategoryById, getClothesArtById } from "../../../../Data/data";
import { FaShoppingBasket } from "react-icons/fa";
import { ViewButtons } from "../DeliveryOptionsView/ViewButtons";

export function Cart(){

    const {order,setOrder}  = useContext(OrderContext);

    function increaseItemQuantity(index) {
      setOrder((prev) => {
        const updatedCart = [...prev.cart];
        updatedCart[index] = { ...updatedCart[index], number: updatedCart[index].number + 1 };
        return { ...prev, cart: updatedCart };
      });
    }
    
    function decreaseItemQuantity(index) {
      setOrder((prev) => {
        const updatedCart = [...prev.cart];
        if (updatedCart[index].number > 1) {
          updatedCart[index] = { ...updatedCart[index], number: updatedCart[index].number - 1 };
        } else {
          updatedCart.splice(index, 1); // Remove item if quantity is 1
        }
        return { ...prev, cart: updatedCart };
      });
    }
    return (
        <div>
             <h3 className="mt-4 mb-2" >
             <FaShoppingBasket className="me-3" size={30} />
                Spendenkorb</h3>

<Table className="" >

<thead>
    <tr>
      <th>#</th>
      <th>Kleidung</th>
      <th>Kategorie</th>
      <th>Größe</th>
      <th>Anzahl</th>
    </tr>
  </thead>
  <tbody>

{
  order.cart.map((item,index)=> {

    
      return <tr key={item.item.category + item.item.clothesArts + item.item.size } >
      <td>{index + 1}</td>
      <td>{getClothesArtById(item.item.clothesArts)}</td>
      <td>{getCategoryById(item.item.category).name}</td>
      <td>{item.item.size}</td>
      <td >
          
      <Button variant="danger"  size="sm" onClick={() => decreaseItemQuantity(index)}>-</Button>

        <span className="mx-3">{item.number}</span>
        <Button variant="primary" size="sm" onClick={() => increaseItemQuantity(index)}>+</Button>

          </td>
    </tr>

  })
}

 
  </tbody>
</Table>


        </div>
    );
}