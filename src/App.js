import ItemContainer from "./Components/ItemContainer";
import "./App.css";

function App() {
  const data = [
    { id: 1, date: new Date(2023,4,28), title: "eating" },
    { id: 1, date: new Date(), title: "reading" },
    { id: 1, date: new Date(), title: "reading" },
  ];
  return (
    <div className="App">
      <ItemContainer itemData={data}/>
    </div>
  );
}

export default App;
