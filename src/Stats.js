export default function Stats({ items }) {
  if (!items.length) {
    return (
      <div>
        <p className=" h-auto w-full bg-green-900 py-4 fixed bottom-0 text-gray-400 text-center">
          <em>Start Adding Some Items To Your Packing List</em>
        </p>
      </div>
    );
  }

  const numItems = items.length;
  const packedItem = items.filter((item) => (item.packed ? item : "")).length;

  return (
    <div>
      <p className=" h-auto w-full bg-green-900 py-4 fixed bottom-0 text-gray-400 text-center">
        {packedItem === numItems
          ? `You got everything! Ready to go`
          : ` You have ${numItems} items on your list, and you already packed
          ${packedItem} items`}
      </p>
    </div>
  );
}
