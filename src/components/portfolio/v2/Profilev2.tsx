import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Idioma } from "@/types/portfolio"
import { LanguagesIcon, UserIcon } from "lucide-react"
import { LEVELS } from "@/constants/levels"

type Props = {
  name: string
  lastName: string
  title: string
  languages: Idioma[]
  bio: string
  image: string | null
}
export default function Profilev2({ name, lastName, title, languages, bio, image }: Props) {
  return (
    <section className="container px-4 pb-12 pt-24 max-w-5xl mx-auto relative z-10" >
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-md transform -rotate-6 scale-105"></div>
            <Avatar className="w-48 h-48 border-4 border-white dark:border-gray-800 relative">
              <AvatarImage src={image ?? '/placeholder.svg?height=128&width=128'} alt={`${name} ${lastName}`} />
              <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                {name.charAt(0)}
                {lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400">
              {name} {lastName}
            </h1>
            <p className="text-xl text-blue-700 dark:text-blue-300 font-medium">{title}</p>
          </div>
        </div>

        <div className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200">Sobre mí</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{bio}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LanguagesIcon className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200">Idiomas</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900 dark:to-blue-900 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-800 transition-colors"
                >
                  {language.idioma} {language.nivel && `(${LEVELS[language.nivel as keyof typeof LEVELS] || language.nivel})`}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}