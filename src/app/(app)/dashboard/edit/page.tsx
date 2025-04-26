import PortfolioMultistepForm from "@/components/portfolio/PortfolioMultistepForm"
import { db } from "@/server/db"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { portfolios } from "@/server/db/schema"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function EditPortfolioPage() {
  const { userId } = await auth()
  const portfolio = await db.query.portfolios.findFirst({
    where: eq(portfolios.userId, userId!),
  })

  return (
    <>
      <div className="flex items-center gap-2 group">
        <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        <Link href="/dashboard" className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Volver al dashboard</Link>
      </div>
      <PortfolioMultistepForm portfolio={portfolio} />
    </>
  )
}
