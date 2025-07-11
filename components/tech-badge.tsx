import type React from "react"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface TechBadgeProps {
  name: string
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
}

export function TechBadge({ name, icon: Icon, className = "" }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={`flex items-center gap-1.5 px-2 py-1 transition-all hover:bg-primary hover:text-primary-foreground ${className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{name}</span>
    </Badge>
  )
}
