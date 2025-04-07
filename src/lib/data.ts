"server-only"

import { db } from "@/server/db"
import { eq } from "drizzle-orm"
import { portfolios } from "@/server/db/schema"

export async function getPortfolio(userId: string) {
  const portfolio = await db.query.portfolios.findFirst({
    where: eq(portfolios.userId, userId)
  })

  return portfolio
}

