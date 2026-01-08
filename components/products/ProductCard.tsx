import Link from "next/link"
import { ChevronDownIcon, ChevronUpIcon, StarIcon, ThumbsUpIcon } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface Product {
    id : number,
    name : string,
    description : string,
    task : string[],
    votes : number,
    isFeatured : boolean
}

function ProductCard({product} : {
    product : Product
}) {
    const hasVoted = false;
  return (
    <Link href={`/products/${product.id}`}>
        <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[220px]">
            <CardHeader className="flex-1">
                <div className="flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">                  
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                            {product.isFeatured && <Badge className="bg-primary text-primary-foreground gap-1"> <StarIcon className="size-3 fill-current"/> Featured</Badge>}
                        </div>
                        <CardDescription>{product.description}</CardDescription>
                </div>
               {/*  votin button */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                    <Button variant="ghost" size="icon-sm" className={cn("p-2 h-8 w-8 text-primary ", hasVoted ? "hover:bg-primary/20 text-primary bg-primary/10 " : "hover:bg-primary/10 ")}>
                        <ChevronUpIcon className="size-5"/>
                    </Button>
                    <span className="text-sm font-semibold transition-colors text-foreground">{product.votes}</span>
                    <Button variant="ghost" size="icon-sm" className={cn("h-8 w-8 text-primary" , hasVoted ? " hover:text-destructive" : "opacity-50 cursor-not-allowed" )}>
                        <ChevronDownIcon className="size-5"/>
                    </Button>
                </div>
                </div>
                
                
            </CardHeader>
            <CardFooter>
                <div className="flex items-center gap-2">
                {product.task.map((task,index)=>(
                    <Badge key={index} variant={"secondary"}>{task}</Badge>
                ))}
                 </div>
            </CardFooter>
        </Card>
    </Link>
  )
}

export default ProductCard