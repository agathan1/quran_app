import React from 'react'
import { Select } from '../ui/select'

type Props = {
  children: React.ReactNode
} & React.ComponentProps<typeof Select>

function SelectWrapper({children, ...props}: Props) {
  return (
    <Select className='w-full' {...props}>
        {children}
    </Select>
  )
}

export default SelectWrapper