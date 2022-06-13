import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col flex-wrap space-y-4">
        <h1 className="self-center font-bold text-3xl">Welcome!</h1>
        <ul className="flex flex-row flex-wrap self-center space-x-10">
          <li>
            <Link to="api/products/create">
              <button className="rounded-md border-4 px-3 py-1">Add Product</button>
            </Link>
          </li>
          <li>
            <Link to="api/location">
              <button className="rounded-md border-4 px-3 py-1">Add Location</button>
            </Link>
          </li>
          <li>
            <Link to="api/add-product-to-location">
              <button className="rounded-md border-4 px-3 py-1">Add Product to Location</button>
            </Link>
          </li>
          <li>
            <Link to="api/products">
              <button className="rounded-md border-4 px-3 py-1">Products</button>
            </Link>
          </li>
          <li>
            <Link to="api/inventory">
              <button className="rounded-md border-4 px-3 py-1">Inventory</button>
            </Link>
          </li>

        </ul>
      </div>

      {/* An <Outlet> renders whatever child route is currently active,
                so you can think about this <Outlet> as a placeholder for
                the child routes we defined above. */}
      <Outlet />
    </>
  );
}
