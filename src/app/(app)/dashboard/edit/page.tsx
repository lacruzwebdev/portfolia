import PortfolioMultistepForm from "@/components/portfolio/PortfolioMultistepForm"
import { db } from "@/server/db"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { portfolios } from "@/server/db/schema"

export default async function EditPortfolioPage() {
  const { userId } = await auth()
  const portfolio = await db.query.portfolios.findFirst({
    where: eq(portfolios.userId, userId!),
  })

  return (
    <PortfolioMultistepForm portfolio={portfolio} />
  )
}
