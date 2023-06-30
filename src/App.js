import { useState } from "react";
import ItemContainer from "./Components/ItemContainer";
import "./App.css";
import NewItem from "./Components/NewItem";
const data = [
  { id: 20, date: new Date(2023, 4, 28), title: "eating" },
  { id: 30, date: new Date(2022, 4, 20), title: "reading" },
  { id: 40, date: new Date(2021, 3, 4), title: "coding" },
  { id: 50, date: new Date(2020, 6, 15), title: "cooking" },
];
function App() {
  const [finalData, setFinalData] = useState(data);
  function saveDataHandler(sendedData) {
    setFinalData((prevData) => {
      return [sendedData, ...finalData];
    });
    //  console.log("from app ",finalData);
  }
  return (
    <div className="App">
      <NewItem sendData={saveDataHandler} />
      <ItemContainer itemData={finalData} />
    </div>
  );
}

export default App;
