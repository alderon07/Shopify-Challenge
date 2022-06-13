import { useState } from "react";

export default function ProdToLoc() {
  const [product, setProduct] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [zipCode, setZipCode] = useState<string>("")

  const handleSubmit = () => {
    alert("Location added to product");
  };

  return (
    <>
      <div className="mt-10">
        <form action="" className="flex flex-col space-y-10 self-center">
          <label>
            Product Name:
            <input type="text" name="product" onChange={(e)=>setProduct(e.target.value)} className="border-2"/>
          </label>
          <label>
            Quantity:
            <input type="text" name="quantity" onChange={(e)=>setQuantity(e.target.value)} className="border-2" />
          </label>
          <label>
            Address:
            <input type="text" name="address" onChange={(e)=>setAddress(e.target.value)} className="border-2"/>
          </label>
          <label>
            City:
            <input type="text" name="city" onChange={(e)=>setCity(e.target.value)} className="border-2"/>
          </label>
          <label>
            State:
            <input type="text" name="state" onChange={(e)=>setState(e.target.value)} className="border-2"/>
          </label>
          <label>
            ZIP-Code:
            <input type="text" name="zip-code" onChange={(e)=>setZipCode(e.target.value)} className="border-2"/>
          </label>
          <button
            onSubmit={handleSubmit} type="submit" className="rounded border-4 bg-blue-500 border-blue-500 w-1/6 self-center text-white"
          >
            Add Product to Location
          </button>
        </form>
      </div>
    </>
  );
}
