import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
}
export interface TextInputIconProps {
  children: ReactNode
}
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 w-full h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'
      )}
    >
      {props.children}
    </div>
  )
}

export function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      )}
    />
  )
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputInput.displayName = 'TextInput.Input'
TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
