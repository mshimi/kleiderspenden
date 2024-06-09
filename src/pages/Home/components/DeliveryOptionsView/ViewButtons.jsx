import { Button } from "react-bootstrap";

export function ViewButtons(props){



   function showErrorMessage (){
        return props.hasError ? "d-block" : "d-none";
    }

    return    <div className=" text-center bottom-0  my-auto">
    <p style={{color: "red"}} className={` ${showErrorMessage()}`} >{props.errorMessage}</p>
      <Button
        className="  p-2 me-2"
        onClick={ props.back}
        variant="outline-danger"
      >
        zurück
      </Button>

      <Button
        className="p-2 ms-2"
        onClick={props.next}
        variant="outline-primary"
      >
        Weiter
      </Button>
    </div>;
}