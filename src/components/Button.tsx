import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'py-3 px-4 w-full rounded bg-cyan-500 text-black text-sm  font-sans font-semibold transition-colors hover:bg-cyan-300 focus:ring-2 ring-cyan-300',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
