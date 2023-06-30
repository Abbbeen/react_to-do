import ItemContainer from "./Components/ItemContainer";
import "./App.css";

function App() {
  const data = [
    { id: 1, date: new Date(2023,4,28), title: "eating" },
    { id: 1, date: new Date(2022,4,20), title: "reading" },
    { id: 1, date: new Date(2021,3,4), title: "coding" },
    { id: 1, date: new Date(2020,6,15), title: "cooking" },
  ];
  return (
    <div className="App">
      <ItemContainer itemData={data}/>
    </div>
  );
}

export default App;
