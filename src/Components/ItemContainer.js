import ItemLists from "./ItemLists";
import "./ItemContainer.css";

function ItemContainer(props) {
  function sendingDeletion(delIndex){
    const sendIndex=delIndex;
    props.finalDelete(sendIndex);
    console.log("in the container",sendIndex);
  }
  return (
    <div className="main-item">
      <h1 className="main-title">Today's Tasks</h1>
      {props.itemData.map((items,index) => {
        return <ItemLists indexed={index} toBeDelete={sendingDeletion} key={items.id} item={items} />;
      })}
    </div>
  );
}

export default ItemContainer;
