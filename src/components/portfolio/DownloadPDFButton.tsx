"use client"
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { PortfolioPDF } from './PortfolioPDF'
import type { Portfolio } from '@/types/portfolio'
import dynamic from 'next/dynamic'

export function DownloadPDFButton({ portfolio, className }: { portfolio: Portfolio, className?: string }) {
  const PDFDownloadLink = dynamic(() => import('./PDFDownloadLink').then(mod => mod.default), {
    ssr: false,
    loading: () => <Button disabled size="sm" className={className}>
      <Download className="w-4 h-4 mr-2" />
      Descargar PDF
    </Button>
  }
  )
  return (
    <PDFDownloadLink
      document={<PortfolioPDF portfolio={portfolio} />}
      fileName={`portfolio-${portfolio.nombre}-${portfolio.apellidos}.pdf`}
    >
      <Button size="sm" className={className}>
        <Download className="w-4 h-4 mr-2" />
        Descargar PDF
      </Button>
    </PDFDownloadLink>
  )
}