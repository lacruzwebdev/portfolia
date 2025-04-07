import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Educacion } from "@/types/portfolio"
import { CalendarIcon, GraduationCapIcon } from "lucide-react"

interface EducationProps {
  educations: Educacion[]
}

export default function Education({ educations }: EducationProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Educación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold text-lg">{edu.titulo}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>
                    {edu.fechaInicio} - {edu.fechaFin}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground mb-2">
                <GraduationCapIcon className="h-4 w-4 mr-1" />
                <span>{edu.institucion}</span>
              </div>

              <p className="text-sm text-muted-foreground">{edu.descripcion}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

