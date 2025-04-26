import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Educacion, Experiencia } from "@/types/portfolio"
import { BriefcaseIcon, CalendarIcon, GraduationCapIcon } from "lucide-react"

type Props = {
  experience: Experiencia[]
  education: Educacion[]
}
export default function ExperienceEducationsTabs({ experience, education }: Props) {
  return (
    <section className="container px-4 py-12 max-w-5xl mx-auto relative z-10" >
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-blue-900 p-1">
          <TabsTrigger
            value="experience"
            className="text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
          >
            <BriefcaseIcon className="w-4 h-4 mr-2" />
            Experiencia
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
          >
            <GraduationCapIcon className="w-4 h-4 mr-2" />
            Formación
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="space-y-8">
          {experience.map((job, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600"></div>
              <CardHeader className="pb-2 relative">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white dark:border-gray-800"></div>
                <div className="flex justify-between items-start pl-4">
                  <div>
                    <CardTitle className="text-blue-800 dark:text-blue-200">{job.cargo}</CardTitle>
                    <CardDescription className="text-base font-medium mt-1 text-blue-600 dark:text-blue-400">
                      {job.empresa}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                  >
                    <CalendarIcon className="w-3 h-3" />
                    <span>
                      {job.fechaInicio} - {job.fechaFin}
                    </span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pl-8">
                <p className="text-gray-700 dark:text-gray-300">{job.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="education" className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600"></div>
              <CardHeader className="pb-2 relative">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white dark:border-gray-800"></div>
                <div className="flex justify-between items-start pl-4">
                  <div>
                    <CardTitle className="text-blue-800 dark:text-blue-200">{edu.titulo}</CardTitle>
                    <CardDescription className="text-base font-medium mt-1 text-blue-600 dark:text-blue-400">
                      {edu.institucion}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                  >
                    <CalendarIcon className="w-3 h-3" />
                    <span>
                      {edu.fechaInicio} - {edu.fechaFin}
                    </span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pl-8">
                <p className="text-gray-700 dark:text-gray-300">{edu.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </section >
  )
}