'use client'

import { Button } from "@/components/ui/button"
import { CopyIcon } from "lucide-react"
import { toast } from "sonner"

interface CopyToClipboardButtonProps {
  content: string
}

export default function CopyToClipboardButton({ content }: CopyToClipboardButtonProps) {
  const copyToClipboard = async () => {
    try {
      const fullUrl = `${window.location.origin}${content}`
      await navigator.clipboard.writeText(fullUrl)
      toast.success("Enlace copiado al portapapeles")
    } catch {
      toast.error("Error al copiar el enlace")
    }
  }

  return (
    <Button
      variant="outline"
      className="w-1/2 cursor-pointer"
      onClick={copyToClipboard}
    >
      <CopyIcon className="mr-2 h-4 w-4" />
      Copiar Enlace
    </Button>
  )
}