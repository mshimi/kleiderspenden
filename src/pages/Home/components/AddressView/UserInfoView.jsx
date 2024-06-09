import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import ViewHeader from "../DeliveryOptionsView/ViewHeader";
import TextField from "./TextField";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../context/OrderContextProvider";

export default function UserInfoView(props) {
  const initialValues = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    date: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Vorname ist erforderlich!";
    }

    if (!values.lastName) {
      errors.lastName = "Nachname ist erforderlich!";
    }

    if (!values.street) {
      errors.street =
        "Bitte geben Sie Ihre Straße und Hausnummer ein! bsp. Musterstraße 123";
    }
    if (!values.city) {
      errors.city = "Bitte geben Sie Ihre Stadt ein!";
    }
    if (!values.zipCode) {
      errors.zipCode = "Bitte geben Sie Ihre Postleitzahl ein!";
    } else if (values.zipCode.length < 5) {
      errors.zipCode = "Bitte geben Sie eine gültige Postleitzahl ein!";
    } else if (values.zipCode[0] !== "4" && values.zipCode[1] !== "4") {
      errors.zipCode =
        "Leider können wir Ihre Spende nicht abholen, da wir nur in Herne (44649) und Umgebung tätig sind!";
    }
    if (!values.date) {
      errors.date = "Bitte geben Sie ein Datum ein!";
    } else if (new Date(values.date) < new Date()) {
      errors.date = "Bitte geben Sie ein gültiges Datum ein!";
    } else if (
      new Date(values.date).getDay() === 0 ||
      new Date(values.date).getDay() === 6
    ) {
      errors.date = "Leider können wir nur von Montag bis Freitag abholen!";
    } else if (
      new Date(values.date).getHours() < 8 ||
      new Date(values.date).getHours() > 18
    ) {
      errors.date = "Leider können wir nur zwischen 8 und 18 Uhr abholen!";
    }

    return errors;
  };
  const {order,setOrder} =  useContext(OrderContext);

  useEffect(() => {
   
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setOrder((prev) => {
        return {
          ...prev,
          address: formValues,
        };
      });
      props.next();
    }
  }, [formErrors, isSubmit, props]);

  return (
    <div>
      <ViewHeader
        title="Geben Sie Ihre persönlichen Informationen und Adresse ein"
        description="Um Ihre Spende erfolgreich abzuschließen, benötigen wir einige persönliche Informationen und Ihre Adresse. Diese Informationen helfen uns, die Abholung Ihrer Spende zu organisieren und sicherzustellen, dass sie die richtigen Empfänger erreicht. Bitte füllen Sie die folgenden Felder sorgfältig aus."
      />

      <Form onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          label="Vorname"
          placeholder="Vorname"
          onChange={handleChange}
          value={formValues.firstName}
          error={formErrors.firstName}
        />
        <TextField
          name="lastName"
          label="Nachname"
          placeholder="Nachname"
          onChange={handleChange}
          value={formValues.lastName}
          error={formErrors.lastName}
        />
        <TextField
          name="street"
          label="Straße & Nr."
          placeholder="Straße und Haus-Nr"
          onChange={handleChange}
          value={formValues.street}
          error={formErrors.street}
        />
        <TextField
          name="city"
          label="Stadt"
          placeholder="Stadt"
          onChange={handleChange}
          value={formValues.city}
          error={formErrors.city}
        />
        <TextField
          name="zipCode"
          label="Post"
          placeholder="post"
          onChange={handleChange}
          value={formValues.zipCode}
          error={formErrors.zipCode}
        />
        <TextField
          name="date"
          label="Datum"
          placeholder="Datum"
          onChange={handleChange}
          type="datetime-local"
          value={formValues.date}
          error={formErrors.date}
        />

        <Button variant="danger" onClick={()=> {props.back()}} >Züruck</Button>
        <Button className="ms-3" variant="primary" type="submit">
          Bestätigen und Abschließen
        </Button>
      </Form>
    </div>
  );
}
