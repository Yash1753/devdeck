import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function StatsCard({
    icon : Icon, value, label , hasBorder
}: {
    icon : LucideIcon,
    value : string,
    label : string,
    hasBorder ?: boolean
}) {
  return (
    <div className={cn("space-y-2", hasBorder && "border-x border-border/50")}>
        <div className="flex  items-center justify-center gap-2">
            <Icon className="h-10 w-10 text-primary/70"/>
            <p className="text-2xl font-bold">{value}</p>
            
        </div>
        <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

export default StatsCard