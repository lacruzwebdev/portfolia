import { env } from '@/env';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText, type Message } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json() as { messages: Message[] };
  const { messages } = body;
  console.log(messages)

  const openrouter = createOpenRouter({
    apiKey: env.OPENROUTER_API_KEY
  })

  const result = streamText({
    model: openrouter('gpt-3.5-turbo'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toDataStreamResponse();
}