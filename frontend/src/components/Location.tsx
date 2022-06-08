import React, { useState } from "react";

export default function Location() {
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = () => {
    alert("Product was added");
  };

  return (
    <>
      <div className="mt-10">
        <form className="flex flex-col space-y-10">
          <label>
            Address:
            <input
              type="text"
              name="address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              className="border-2"
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              onChange={(event) => {
                setCity(event.target.value);
              }}
              className="border-2"
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              onChange={(event) => {
                setState(event.target.value);
              }}
              className="border-2"
            />
          </label>
          <label>
            ZIP Code:
            <input
              type="text"
              name="zipcode"
              onChange={(event) => {
                setZipcode(event.target.value);
              }}
              className="border-2"
            />
          </label>
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="rounded border-4 bg-blue-500 border-blue-500 w-1/6 self-center text-white"
          >
            Add Location
          </button>
        </form>
      </div>
    </>
  );
}
