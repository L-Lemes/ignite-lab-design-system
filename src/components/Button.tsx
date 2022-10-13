import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'py-4 px-3 w-full rounded bg-cyan-500 text-black text-sm  font-sans font-semibold transition-colors hover:bg-cyan-300 focus:ring-2 ring-cyan-300'
      )}
    >
      {children}
    </Comp>
  )
}
