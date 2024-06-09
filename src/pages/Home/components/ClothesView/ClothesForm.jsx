import { Button, Col, Form, Row } from "react-bootstrap";
import { categories, clothesArts } from "../../../../Data/data";
import { useContext, useState } from "react";
import { FaPlus, FaRegPlusSquare } from "react-icons/fa";
import { OrderContext } from "../../../../context/OrderContextProvider";

export default function ClothesForm(props) {

    const {order, setOrder} = useContext(OrderContext);
  const [currentSelected, setSelected] = useState({
    category: undefined,
    clothesArts: "",
    size: "",
  });

  function onCategoryChanged(e) {
    let value = e.target.value;
    setSelected((prev) => {
      return { ...prev, category: value, clothesArts: undefined, size: undefined};
    });
  }

  function onClothesArtChanged(e) {
    let value = e.target.value;
    setSelected((prev) => {
      return { ...prev, clothesArts: value , size: undefined};
    });
  }

  function onSizeChanged(e) {
    let value = e.target.value;
    setSelected((prev) => {
      return { ...prev, size: value };
    });
  }
  function onSubmit(event) {
    event.preventDefault();
    setOrder((prev) => {
        // Find the item in the cart
        const existingItemIndex = prev.cart.findIndex(item =>
            item.item.category === currentSelected.category &&
            item.item.clothesArts === currentSelected.clothesArts &&
            item.item.size === currentSelected.size
          );
    
        // If the item exists, increment its number
        if (existingItemIndex !== -1) {
          const updatedCart = prev.cart.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                number: item.number + 1
              };
            }
            return item;
          });
    
          return {
            ...prev,
            cart: updatedCart
          };
        }
    
        // If the item doesn't exist, add it to the cart with number: 1
        return {
          ...prev,
          cart: [...prev.cart, { item: currentSelected, number: 1 }]
        };
      });
  }

  return (
    <Form className="border p-2 rounded" onSubmit= {onSubmit}>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Kategorie</Form.Label>
            <Form.Select
            required
              aria-label="Kategorie"
                value={currentSelected.category ? currentSelected.category : ""}
        
              
              onChange={onCategoryChanged}
            >
              <option disabled value={""}>
                Wählen Sie eine Kategorie
              </option>
              {categories.map((category) => {
                return <option key={category.id} value={category.id}>{category.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Form.Group className="mb-3" controlId="art">
            <Form.Label>Kleidungsart</Form.Label>
            <Form.Select
            required
                value={currentSelected.clothesArts ? currentSelected.clothesArts : ""}
              disabled={!currentSelected.category}
              aria-label="Kleidungsart"
              // defaultValue={""}
              onChange={onClothesArtChanged}
            >
              <option disabled value={""}>
                Wählen Sie eine Kleidungsart
              </option>
              {clothesArts
                .filter((art) => {
                  return art.types.includes(currentSelected.category);
                })
                .map((art) => {
                  return <  option key={art.id} value={art.id}>{art.name}</option>;
                })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Form.Group className="mb-3" controlId="size">
            <Form.Label>Größe</Form.Label>
            <Form.Select
            value={currentSelected.size ? currentSelected.size : ""}
            required

              disabled={!currentSelected.clothesArts}
              aria-label="Größe"
           
              
              onChange={onSizeChanged}
            >
              <option disabled value={""}>
                Wählen Sie eine Größe
              </option>
              {currentSelected.clothesArts &&
                clothesArts
                  .find((art) => art.id === currentSelected.clothesArts)
                  .sizes.map((size) => {
                    return <option key={size} value={size}>{size}</option>;
                  })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex flex-column align-items-center justify-content-end p-3"
        >
          <Button variant="success" type="submit" className=" d-md-none  w-100">
            <FaPlus className="me-3" />
            Hinzufügen
          </Button>
          <Button
            variant="success"
            type="submit"
            className=" d-none d-md-block "
          >
            <FaPlus className="me-3" />
            Hinzufügen
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
