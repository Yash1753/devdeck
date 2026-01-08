import SectionHeader from "@/components/common/SectionHeader";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button"
import Link from "next/link";
import ProductCard from "../products/ProductCard";



const featuredProducts = [
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


function FeaturedProducts() {
  return (
   <section className="20 bg-muted/20">
    <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
            <SectionHeader title="Featured Today" icon={StarIcon} description="Top Picks from our community this week"/>
            <Button variant="outline" asChild className="hidden sm:flex"><Link href="/explore">View All<ArrowRightIcon className="size-4"/></Link></Button>
        </div>
        <div className="grid-wrapper">
            {featuredProducts.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))}

        </div>

    </div>

   </section>
  )
}

export default FeaturedProducts