import useFetch from "../hooks/useFetch"
import ProductCard from "./ProductCard"

interface Product {
    id: number,
    name: string,
    description: string,
    price: string,
}
export default function Products(){
    const url = `${process.env.REACT_APP_URL}/products`
    console.log(url)
    const { data, error } = useFetch<Product[]>(url)
    
    if(error) return <h1>There is an error</h1>
    if(!data) return <h1>Loading...</h1>

    return(
        <>
        <div className="flex flex-col mt-10">
            <div className="p-3 rounded-lg shadow-md self-center container bg-slate-100">
                <div className="grid grid-cols-5">
                    <span>Name</span>
                    <span>Description</span>
                    <span>Price</span>
                </div>
            </div>
            <div className="self-center flex flex-col container">

                {data.map?.((item) => (
                    <ProductCard product={item} />
                ))}
            </div>
        </div>
    </>
    )
}