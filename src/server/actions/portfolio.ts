'use server'

import { db } from "@/server/db"
import { portfolios } from "@/server/db/schema"
import { auth, clerkClient } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import type { Portfolio } from "@/types/portfolio"
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { env } from "@/env"


export async function savePortfolio(data: Portfolio) {
  const { userId } = await auth()
  if (!userId) {
    throw new Error("No autorizado")
  }

  const client = await clerkClient()

  try {
    // Verificar si ya existe un portfolio para este usuario
    const existingPortfolio = await db
      .select()
      .from(portfolios)
      .where(eq(portfolios.userId, userId))
      .get()

    if (existingPortfolio) {
      // Actualizar el portfolio existente
      await db
        .update(portfolios)
        .set({
          ...data,
          updatedAt: new Date(),
        })
        .where(eq(portfolios.userId, userId))
    } else {
      // Crear un nuevo portfolio
      await db.insert(portfolios).values({
        id: crypto.randomUUID(),
        userId,
        ...data,
      })
      // Onboarding Complete
      await client.users.updateUserMetadata(userId, {
        publicMetadata: {
          onboardingComplete: true,
        },
      })
    }
    console.log("Portfolio guardado exitosamente")
    return { success: true }
  } catch (error) {
    console.error("Error al guardar el portfolio:", error)
    return { success: false, error: "Error al guardar el portfolio" }
  }
}

export async function generate(input: string) {
  const stream = createStreamableValue('');
  const openrouter = createOpenRouter({
    apiKey: env.OPENROUTER_API_KEY
  });


  (async () => {
    const { textStream } = streamText({
      model: openrouter('gpt-3.5-turbo'),
      prompt: input,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })().catch(error => {
    console.error('Error:', error);
    stream.error(error as Error);
  });

  return { output: stream.value };
}