import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SparkleIcon , ArrowRightIcon, RocketIcon, UserIcon, EyeIcon} from "lucide-react"
import StatsCard from "@/components/landing-page/StatsCard"

const LiveBadge = ()=>{
    return <Badge variant="outline" className="px-4 py-2 text-sm background-blur-sm mb-8 ">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                   
                    <span className="text-muted-foreground">Join thousands of creators sharing their work</span>
            </Badge>
}

const StatData = [
  {
    icon: RocketIcon,
    value: "200+",
    label: "Projects Shared"
 },
 {
  icon : UserIcon,
  value : "10k",
  label : "Active Creators",
  hasBorder : true

 },{
  icon : EyeIcon,
  value : "5k+",
  label : "Monthly Visitors"
 }
]

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
        <div className="wrapper">
            <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
                <LiveBadge/>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl"> 
                  Share What You&apos;ve Built, Discover What&apos;s Launching
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"> A community platform for creators to showcase their apps, AI tools,
                        SaaS products, and creative projects. Authentic launches, real
                        builders, genuine feedback.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                     <Button asChild size="lg" className="shadow-lg text-base px-8"><Link href="/submit"><SparkleIcon className="mr-2 h-5 w-5" />  Share  your Project</Link></Button>

                     <Button asChild size="lg" className="shadow-lg text-base px-8" variant={"secondary"}><Link href="/explore">Explore Projects<ArrowRightIcon className="ml-2 h-5 w-5" /></Link></Button>
                </div>


                {/* Stats */}
                <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 justify-center max-w-2xl mx-auto w-full">
                {StatData.map((item,index)=>{
                  return <StatsCard key={item.label} {...item} />
                })}
                </div>
              
            </div>
        </div>
    </section>
  )
}

export default HeroSection;