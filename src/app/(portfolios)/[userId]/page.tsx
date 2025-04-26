import Bio from "@/components/portfolio/Bio";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Languages from "@/components/portfolio/Languages";
import Profile from "@/components/portfolio/Profile";
import Skills from "@/components/portfolio/Skills";
import { getPortfolio } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function PortfolioPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;

  const portfolio = await getPortfolio(userId)


  if (!portfolio) {
    return notFound()
  }

  return <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex justify-between items-start">
        <Profile name={portfolio.nombre} lastName={portfolio.apellidos} title={portfolio.titulo} image={portfolio.imagenPerfil} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Languages languages={portfolio.idiomas} />
          <Skills skills={portfolio.habilidades} />
        </div>

        <div className="md:col-span-2 space-y-6">
          <Bio bio={portfolio.bio} />
          <Experience experiences={portfolio.experiencia} />
          <Education educations={portfolio.educacion} />
        </div>
      </div>
    </div>
  </main>
}