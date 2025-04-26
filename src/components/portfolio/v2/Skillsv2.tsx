import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"

type Props = {
  skills: string
}
export default function Skillsv2({ skills: skillsStr }: Props) {
  const skills = skillsStr.split(',').map(skill => skill.trim())
  return (
    <section className="container px-4 py-12 max-w-5xl mx-auto relative z-10" >
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <StarIcon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400">
          Habilidades
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-blue-200 dark:from-blue-800 dark:to-blue-800"></div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className={`text-sm font-medium py-2 px-3 transition-all duration-300 hover:scale-105 ${index % 4 === 0
                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                : index % 4 === 1
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  : index % 4 === 2
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                }`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section >
  )
}