import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = 'lg', ...props }, ref) => {
        const sizeClasses = {
            sm: 'max-w-3xl',
            md: 'max-w-5xl',
            lg: 'max-w-7xl',
            xl: 'max-w-screen-2xl',
            full: 'max-w-full',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'mx-auto px-4 sm:px-6 lg:px-8',
                    sizeClasses[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Container.displayName = "Container";

export { Container };