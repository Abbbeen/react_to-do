import "../CSS_components/ErrprMessage.css";

function ErrorMessage(props) {
    function closeHandler(){
        props.sendConfirm();
    }
  return (
    <div>
        <div className="error-back"/>
      <div className="main-error">
        <h1>{props.errorData.title}</h1>
        <div>{props.errorData.message}</div>
        <button onClick={closeHandler}>Okay</button>
      </div>
    </div>
  );
}

export default ErrorMessage;
