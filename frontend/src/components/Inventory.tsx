import Card from "./Card";
import products from "./products.json";

export default function Inventory(){
    const myProducts = products;
    return(
        <>
        <div className="flex flex-col mt-10">
            <div className="p-3 rounded-lg shadow-md self-center container bg-slate-100">
                <div className="grid grid-cols-4">
                    <span>Name</span><span>Description</span><span>Price</span>
                </div>
            </div>
            <div className="self-center flex flex-col container">
                {myProducts.map?.((product) => (
                    <Card product={product} />
                ))}
            </div>
        </div>
    </>
    )
}