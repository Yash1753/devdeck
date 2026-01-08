import { LucideIcon } from "lucide-react"

function EmptyState( {icon : Icon , message}: {icon : LucideIcon , message: string}) {
  return (
    <div className="empty-state">
        <Icon className="size-10 text-muted-foreground/50 mx-auto mb-4"/>
        <p className="text-lg font-muted-foreground">{message}</p>
        
    </div>
  )
}

export default EmptyState