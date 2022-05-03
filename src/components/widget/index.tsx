import { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className='absolute right-5 bottom-5'>
     <Popover.Panel>Hello world</Popover.Panel>
      <Popover.Button
        className='flex items-center h-12 px-3 text-white rounded-full bg-brand-500 group'
      >
        <ChatTeardropDots className='w-6 h-6' />
        <span className='overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
