import useFetch from "../hooks/useFetch";
import InventoryCard from "./InventoryCard";

interface Product{
    name: string
    description?: string
    price: string
}

interface Location{
    address: string
    city: string
    state: string
    zipCode: string
}
interface InventoryItem {
    locationId: number
    quantity: number
    product: Product
    location: Location
}

export default function Inventory(){
    const url = `${process.env.REACT_APP_URL}/inventory`
    console.log(url)
    const { data, error } = useFetch<InventoryItem[]>(url)
    
    if(error) return <h1>There is an error</h1>
    if(!data) return <h1>Loading...</h1>

    return(
        <>
        <div className="flex flex-col mt-10">
            <div className="p-3 rounded-lg shadow-md self-center container bg-slate-100">
                <div className="grid grid-cols-4">
                    <span>Location</span>
                    <span>Name</span>
                    <span>Description</span>
                    <span>Quantity</span>
                </div>
            </div>
            <div className="self-center flex flex-col container">

                {data.map?.((item) => (
                    <InventoryCard inventoryItem={item} />
                ))}
            </div>
        </div>
    </>
    )
}