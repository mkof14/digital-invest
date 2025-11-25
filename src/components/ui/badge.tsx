import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 hover:border-primary/50 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary-foreground border border-secondary/30 hover:border-secondary/50 backdrop-blur-sm",
        destructive:
          "bg-gradient-to-r from-destructive/20 to-destructive/10 text-destructive border border-destructive/30 hover:border-destructive/50 backdrop-blur-sm",
        outline: "text-foreground border border-border/50 hover:border-border backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
