import { useState } from "react";

export default function Form({ onAddItem }) {
  //it used to make a array of ceratin length and generate sequence of numbers
  let myArray = Array.from({ length: 20 }, (_, i) => i + 1);
  console.log(myArray);

  //useState
  const [inputTitle, setInputTitle] = useState("");
  const [inputQuantity, setInputQuantity] = useState("1");

  //submit event
  function handleSubmit(e) {
    if (!inputTitle) {
      alert("Please fill the Credentials");
      return;
    }

    const mydata = {
      title: inputTitle,
      quantity: inputQuantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(mydata);
    //clear fields
    setInputQuantity(1);
    setInputTitle("");
    e.preventDefault();
  }

  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between py-4 bg-slate-600 px-4 ">
      <div>
        <p className="text-gray-300 text-md text-center uppercase font-mono font-bold md:text-2xl">
          What do you need for your trip?
        </p>
      </div>

      <form className="flex gap-4 justify-center" onSubmit={handleSubmit}>
        <select
          value={inputQuantity}
          onChange={(e) => setInputQuantity(Number(e.target.value))}
          className=" bg-yellow-300 w-10 md:w-15 rounded-md h-10"
        >
          {myArray.map((num) => {
            // note: you have to return when using {} dont have to return when used ()
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>

        <input
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="  bg-yellow-700 rounded-md  text-white h-10 w-72"
          type="text"
        ></input>
        <button
          className="h-10 bg-yellow-500 w-10 rounded-md text-white md:w-16"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
