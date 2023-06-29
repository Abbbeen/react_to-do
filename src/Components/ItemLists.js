import "./ItemLists.css";

function ItemLists() {
  return (
    <div className="item">
      <div className="item-part-1">
        <div className="item-date">Date</div>
        <div className="item-title">reading</div>
      </div>
      <button className="item-part-2">Delete</button>
    </div>
  );
}

export default ItemLists;
