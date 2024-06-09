
export default function ViewHeader( props) {

const {title, description} = props;

    return (
        <div className="mt-3 mb-2 p-2">  
        <h2>{title}</h2>
      <p className="mt-3 mb-5 d-none d-md-block ">
        {description}
         </p>
      </div>
    );
}