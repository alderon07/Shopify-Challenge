import { useState } from "react";
import axios from "axios";

export default function Product() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const url = `${process.env.REACT_APP_URL}/products/create`

  const handleCreate = async () => {
    if(name === "" || price === "") return

    const data = {
      "name": name,
      "description": description,
      "price": price,
    }
    try {
      const response = await axios.post(url, data)
    } catch (error) {
      console.error("Response error!", error)
    }
  };

  return (
    <>
      <div className="mt-10">
        <form onSubmit={handleCreate} className="flex flex-col space-y-10">
          <label>
            Product Name:
            <input type="text" name="name" onChange={(event) => {
                setName(event.target.value)
            }} className="border-2" />
          </label>
          <label>
            Product Description:
            <input type="text" name="description" onChange={(event) => {
                setDescription(event.target.value)
            }} className="border-2" />
          </label>
          <label>
            Product Price:
            <input type="text" name="price" onChange={(event) => {
                setPrice(event.target.value)
            }} className="border-2"  />
          </label>
          <button type="submit" className="rounded border-4 bg-blue-500 border-blue-500 w-1/6 self-center text-white"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
