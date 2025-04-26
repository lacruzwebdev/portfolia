"use client"
import { PortfolioPDF } from '@/components/portfolio/PortfolioPDF'
import type { Portfolio } from '@/types/portfolio'
import dynamic from 'next/dynamic'
export default function PDFViewer({ portfolio }: { portfolio: Portfolio }) {
  const Viewer = dynamic(() => import('@/components/portfolio/PDFViewer').then(mod => mod.default), {
    ssr: false,
  })
  return (
    <Viewer className="w-full h-[100svh]">
      <PortfolioPDF portfolio={portfolio} />
    </Viewer>
  )
}