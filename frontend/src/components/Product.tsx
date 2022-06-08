import React, { useState } from "react";

export default function Product() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    alert("Product was added");
  };

  return (
    <>
      <div className="mt-10">
        <form className="flex flex-col space-y-10">
          <label>
            Product Name:
            <input type="text" name="p-name" onChange={(event) => {
                setName(event.target.value)
            }} className="border-2" />
          </label>
          <label>
            Product Description:
            <input type="text" name="p-description" onChange={(event) => {
                setDescription(event.target.value)
            }} className="border-2" />
          </label>
          <label>
            Product Price:
            <input type="text" name="p-price" onChange={(event) => {
                setPrice(event.target.value)
            }} className="border-2"  />
          </label>
          <button
            onSubmit={handleSubmit} type="submit" className="rounded border-4 bg-blue-500 border-blue-500 w-1/6 self-center text-white"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
