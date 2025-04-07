'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendIcon } from "lucide-react"
import { useChat } from "@ai-sdk/react"
import type { Portfolio } from "@/types/portfolio"

interface PortfolioAIChatProps {
  portfolio: Portfolio
}

export default function PortfolioAIChat({ portfolio }: PortfolioAIChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/portfolio-ai',
    initialMessages: [
      {
        id: 'init',
        role: 'system',
        content: `Eres un asistente experto en portfolios profesionales.
        Tienes acceso al portfolio actual del usuario con la siguiente información:

        Nombre: ${portfolio.nombre} ${portfolio.apellidos}
        Título: ${portfolio.titulo}
        Bio: ${portfolio.bio}
        Habilidades: ${portfolio.habilidades}
        Idiomas: ${portfolio.idiomas.map(i => `${i.idioma} (Nivel: ${i.nivel})`).join(', ')}

        Educación:
        ${portfolio.educacion.map(e => `- ${e.titulo} en ${e.institucion} (${e.fechaInicio} - ${e.fechaFin})`).join('\n')}

        Experiencia:
        ${portfolio.experiencia.map(e => `- ${e.cargo} en ${e.empresa} (${e.fechaInicio} - ${e.fechaFin})`).join('\n')}

        Basándote en esta información, proporciona consejos profesionales y específicos para mejorar el portfolio.
        Sé constructivo y específico en tus sugerencias.`
      }
    ]
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Asistente de Portfolio</CardTitle>
        <CardDescription>
          Conversa con la IA para recibir consejos sobre cómo mejorar tu portfolio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
          {messages.map(message => (
            message.role !== 'system' && (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            )
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                Pensando...
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={handleSubmit}
          className="flex w-full gap-2"
        >
          <Input
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <SendIcon className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}