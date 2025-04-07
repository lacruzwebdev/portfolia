import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Experiencia } from "@/types/portfolio"
import { CalendarIcon, BuildingIcon } from "lucide-react"

interface ExperienceProps {
  experiences: Experiencia[]
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Experiencia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold text-lg">{exp.cargo}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>
                    {exp.fechaInicio} - {exp.fechaFin}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground mb-2">
                <BuildingIcon className="h-4 w-4 mr-1" />
                <span>{exp.empresa}</span>
              </div>

              <p className="text-sm text-muted-foreground">{exp.descripcion}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

