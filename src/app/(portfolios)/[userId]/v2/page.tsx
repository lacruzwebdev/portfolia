import ExperienceEducationsTabs from "@/components/portfolio/v2/ExperienceEducationTabs";
import Profilev2 from "@/components/portfolio/v2/Profilev2"
import Skillsv2 from "@/components/portfolio/v2/Skillsv2"
import { getPortfolio } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function PortfolioPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const portfolio = await getPortfolio(userId)

  if (!portfolio) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-blue-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Profilev2 name={portfolio.nombre} lastName={portfolio.apellidos} title={portfolio.titulo} languages={portfolio.idiomas} bio={portfolio.bio} image={portfolio.imagenPerfil} />

      <Skillsv2 skills={portfolio.habilidades} />

      <ExperienceEducationsTabs experience={portfolio.experiencia} education={portfolio.educacion} />

      {/* Footer */}
      <footer className="container px-4 py-8 max-w-5xl mx-auto border-t border-blue-200 dark:border-blue-800 relative z-10">
        <p className="text-center text-blue-700 dark:text-blue-300 text-xs">
          © {new Date().getFullYear()} Portfolia. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  )
}
