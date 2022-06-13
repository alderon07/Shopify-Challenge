export default function InventoryCard({inventoryItem}: any){
    return(
        <>  

            <div className="grid grid-cols-4 p-10 rounded-lg shadow-md self-center container">
                <span>
                    {inventoryItem.location.address}
                </span>
                <span>
                    {inventoryItem.product.name}
                </span>
                <span>{inventoryItem.product.description}</span>
                <span>
                    {inventoryItem.quantity}
                </span>
            </div>  
        </>
    )
}