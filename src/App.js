import { useState } from "react";
import ItemContainer from "./Components/Js_components/ItemContainer";
import "./App.css";
import NewItem from "./Components/Js_components/NewItem";

const data = [
  { id: 20, date: new Date(2023, 4, 28), title: "Yenneta Class" },
  { id: 30, date: new Date(2022, 4, 20), title: "Working On  project" },
  { id: 40, date: new Date(2021, 3, 4), title: "Normal Class" },
  { id: 50, date: new Date(2020, 6, 15), title: "Going To Gym" },
];
function App() {
  const [finalData, setFinalData] = useState(data);
  function saveDataHandler(sendedData) {
    setFinalData((prevData) => {
      return [sendedData, ...finalData];
    });

    //  console.log("from app ",finalData);
  }

  function appDeleteHandler(finalIndex) {
    const updatedItems = [...finalData];
    updatedItems.splice(finalIndex, 1);
    setFinalData(updatedItems);

    // console.log("from delete", finalData);
  }

  return (
    <div className="App">
      <NewItem sendData={saveDataHandler} />
      <ItemContainer finalDelete={appDeleteHandler} itemData={finalData} />
    </div>
  );
}

export default App;
