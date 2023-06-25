import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";

import ItemList from "./ItemList";
import Stats from "./Stats";

// const initialData = [
//   {
//     id: 1,
//     title: "Passports",
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 2,
//     title: "shocks",
//     quantity: 4,
//     packed: false,
//   },
//   {
//     id: 3,
//     title: "Toothbrush",
//     quantity: 3,
//     packed: false,
//   },
// ];

function App() {
  const [newItem, setNewItem] = useState([]); // so hamile yeta useState use garyam varible banyam bcoz yo newItem variable 2 ota children le use garirako xa so parent ma banayo vane both can access if hamile tala form section mai banako vaye we cant pass that variable value from siblings to siblings or to parents so tei vayerw commonly use hune dherai function ma use hune variable should be declared in the parent function

  //add new item
  function addNewItem(addedItem) {
    setNewItem((item) => [...item, addedItem]);
  }

  // delete a item
  function deleteItem(id) {
    setNewItem((items) => items.filter((item) => item.id !== id));
  }

  //toggle the item(checklist)
  function toggleItem(id) {
    setNewItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteAllItem() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setNewItem([]);
  }
  return (
    <div className="flex flex-col p-0">
      <Logo />
      <Form onAddItem={addNewItem} />
      {/* we can also pass function in props */}

      <ItemList
        itemsArray={newItem}
        deleteItem={deleteItem}
        onToggleItem={toggleItem}
        deleteAllItem={deleteAllItem}
      />
      <Stats items={newItem} />
    </div>
  );
}

export default App;
