import { CheckIcon } from "@radix-ui/react-icons"
import React from "react"

interface CheckItemProps {
  title: React.ReactNode // Now accepts strings, JSX, etc.
}

export const CheckItem = ({ title }: CheckItemProps) => (
  <li className="flex items-start gap-2">
    <div className="flex-initial w-4 h-4 flex justify-center items-center">
      <CheckIcon className="w-4 h-4 text-white" />
    </div>
    <p className="text-white">{title}</p>
  </li>
)
