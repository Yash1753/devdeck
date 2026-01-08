import { Calendar1Icon, RocketIcon } from "lucide-react"
import SectionHeader from "../common/SectionHeader"
import ProductCard from "../products/ProductCard"
import EmptyState from "../common/empty-state"

const launchedProducts = [
    {
    id:1,
    name : "LiveDocs",
    description : "a realtime collaborative editor",
    task : ["SaaS", "Collaborative", "Realtime", "Global"],
    votes : 20,
    isFeatured : true
    },
    {
    id:2,
    name : "AutoHub",
    description : "a car MarketPlace",
    task : ["SaaS", "Collaborative", "E-commerce", "Global"],
    votes : 10,
    isFeatured : false
    }
]


function RecentLaunch() {
  return (
    <section className="py-20">
        <div className="wrapper space-y-12">
           <SectionHeader icon = {RocketIcon} title="Recent Launch" description="The most recently launched products"   />
           
            {launchedProducts.length > 0 ? 
             <div className="grid-wrapper">
                {launchedProducts.map((product) =>  (
                <ProductCard key={product.id} product={product}/>
            ))}  </div> : <EmptyState message = "No products is launched in last week. Check Back later!" icon = {Calendar1Icon} />} 

        </div>

       
    </section>
  )
}

export default RecentLaunch