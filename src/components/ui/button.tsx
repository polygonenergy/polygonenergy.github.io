import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-wide",
  {
    variants: {
      variant: {
        default: "btn-primary text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline:
          "border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:border-primary/50",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-all duration-300 backdrop-blur-sm",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
