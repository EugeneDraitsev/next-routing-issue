'use client'

import { memo, useState } from 'react'
import Link from 'next/link'

import Drawer from '@/components/Drawer'

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <nav className="h-[60px] bg-white px-6 py-[6px] shadow-lg md:h-[80px] md:py-4">
      <div className="app-container flex flex-wrap items-center">
        <div
          onClick={() => setIsDrawerOpen(true)}
          className="flex h-[40px] w-[40px] items-center justify-center"
        >
          <svg viewBox="0 0 32 32" fill="currentColor">
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="flex h-full flex-col items-center gap-4">
          <Link href="/">Page 1</Link>
          <Link href="/page2">Page 2</Link>
          <Link href="/page3">Page 3</Link>
        </div>
      </Drawer>
    </nav>
  )
}

export default memo(Header)
