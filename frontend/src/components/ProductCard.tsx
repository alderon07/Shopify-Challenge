export default function ProductCard({ product }: any) {
  const deleteOptions = {
    method: "DELETE",
  };
  
  const handleDeleteClick = () => {
    const deleteProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/` + product.id,
        deleteOptions
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      alert("Product deleted");
    };

    void deleteProduct();

    console.log(product.id);
  };

  const handleUpdateClick = () => {
    console.log(product.id);
  };

  return (
    <>
      <div
        key={product.id}
        className="grid grid-cols-5 p-5 rounded-lg shadow-md self-center container"
      >
        <span>{product.name}</span>
        <span>{product.description}</span>
        <span>{product.price}</span>
        <span>
          <button
            onClick={handleUpdateClick}
            className="rounded border-4 bg-green-500 border-green-500 self-center text-white px-2"
          >
            Update
          </button>
        </span>
        <span>
          <button
            onClick={handleDeleteClick}
            className="rounded border-4 bg-red-500 border-red-500  self-center text-white px-2"
          >
            Delete
          </button>
        </span>
      </div>
    </>
  );
}
