import products from './products.json'

export default function Card({product}: any){
    return(
        <>  

            <div className="grid grid-cols-4 p-10 rounded-lg shadow-md self-center container">
                <span>
                    {product.name}
                </span>
                <span>{product.description}</span>
                <span>
                    {product.quantity}
                </span>
                <button className="text-white rounded-md border-2 bg-red-500">Delete</button>
            </div>  
        </>
    )
}