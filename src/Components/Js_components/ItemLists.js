import DateItem from "./DateItem";
// import { useState } from "react";
import "../CSS_components/ItemLists.css";

function ItemLists(props) {
  // const [deleteValue,setDeleteValue]=useState("");

  function deleteHandler(){
    const index=props.indexed;
    // console.log(index);
    props.toBeDelete(index);
    
  }


  return (
    <div className="item">
      <div className="item-part-1">
        <DateItem itemDate={props.item.date} />
        <div className="item-title">{props.item.title}</div>
      </div>
      <button className="item-part-2" onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ItemLists;
