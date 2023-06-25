import { useState } from "react";

export default function ItemList({
  itemsArray,
  deleteItem,
  onToggleItem,
  deleteAllItem,
}) {
  const [sortby, setSortby] = useState("input");

  let sortedItem;

  if (sortby === "input") sortedItem = itemsArray;
  if (sortby === "alphabetic")
    sortedItem = itemsArray
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  if (sortby === "packed")
    sortedItem = itemsArray
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="h-[100vh] bg-slate-400">
      <div className="flex gap-4 px-8 py-4 relative bg-slate-300   p-0">
        {sortedItem.map((items) => (
          <span
            className="flex gap-2 text-sm font-medium flex-wrap "
            key={items.id}
          >
            <input
              type="checkbox"
              onChange={() => onToggleItem(items.id)}
            ></input>
            {items.quantity}
            <span
              style={items.packed ? { textDecoration: "line-through" } : {}}
            >
              {items.title}
            </span>
            <button
              onClick={() => deleteItem(items.id)}
              className=" text-red-700 text-sm  cursor-pointer"
            >
              X
            </button>
          </span>
        ))}

        {/* filter list button */}

        <div className="h-14 w-full  bg-white py-4 text-center fixed left-0 bottom-20 md:bottom-14 ">
          <select
            value={sortby}
            onChange={(e) => setSortby(e.target.value)}
            className=" bg-slate-500 px-2 text-white rounded-lg"
          >
            <option value="input">Sort by input</option>
            <option value="alphabetic">Sort by alphabetic</option>
            <option value="packed">Sort by packed status</option>
          </select>
          {/* delteall button */}
          <button
            onClick={deleteAllItem}
            className="ml-2 px-2 bg-slate-500 text-white rounded-lg"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
