import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LEVELS } from "@/constants/levels"
import type { Idioma } from "@/types/portfolio"

interface LanguagesProps {
  languages: Idioma[]
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Idiomas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => {
            return (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                {language.idioma} {language.nivel && `(${LEVELS[language.nivel as keyof typeof LEVELS] || language.nivel})`}
              </Badge>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

