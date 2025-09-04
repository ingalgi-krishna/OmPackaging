import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
                secondary: "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary",
                outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
                ghost: "text-primary hover:bg-primary/10",
            },
            size: {
                sm: "h-9 px-3 text-xs",
                md: "h-10 py-2 px-4",
                lg: "h-11 px-8 text-base",
                xl: "h-14 px-10 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };