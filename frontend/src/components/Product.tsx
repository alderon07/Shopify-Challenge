import { useState } from "react";

export default function Product() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const url = `${process.env.REACT_APP_URL}/products/create`

  const handleCreate = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify( 
        {
          name: name,
          description: description,
          price: price,
        }
      )
    }

    const postProduct = async () => {
      try {
        const response = await fetch(url, requestOptions)
        if(!response.ok){
          throw new Error(response.statusText)
        }
  
        console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }

    void postProduct()
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
