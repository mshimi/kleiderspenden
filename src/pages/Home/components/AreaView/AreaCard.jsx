import { Button, Col, Image } from "react-bootstrap";
import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContextProvider";


export function AreaCard(props){

   const  {order, setOrder} =  useContext(OrderContext);


    const area = props.area;

    let isSelected = props.area === order.area;

    function handleOnClick (){
        setOrder((prev)=> {
            return {...prev, area: area}
        });
    }
    

    return (
        <Col  xs={6} sm ={6} md= {4} lg= {3} className="" >
            <Button variant={ isSelected ? "dark" : "light"} className="position-relative rounded-circle" style={{ overflow: 'hidden' , border: isSelected ? "2px solid blue" : "", background: isSelected ? "grey" : ""}} onClick={handleOnClick}  >
                <Image fluid  src={area.flage} className="" alt={area.name} style={{objectFit: "cover", height:"100%", width:"100%" }} />
                <div style={{backgroundColor:"yellow", width: "100%",  opacity: "0.9" ,borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", color: "black", }} 
                className="position-absolute bottom-0 start-50 translate-middle-x text-center p-auto  "> <p style={{opacity:"1"}} className=" fs-6 fw-bold "> {area.name} </p></div>
            </Button>
        </Col>
    );
}