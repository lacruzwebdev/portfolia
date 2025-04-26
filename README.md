# Portfolio Generator 🚀

> **About this project**
>
> This project is part of a personal challenge: I set out to ideate, design, and develop an AI-powered app in a single afternoon. As such, the codebase has plenty of room for improvement and is intentionally simple.

Create and share your professional portfolio in minutes, powered by an AI assistant that suggests personalized improvements.

## What is Portfolio Generator?

Portfolio Generator is a platform where you can build a professional portfolio, customize it, and share it via a unique URL. Its key differentiator is the integration of an AI assistant that accesses your data to help you improve your profile, answer questions, and optimize your professional presentation.

## Main Features

- **Professional portfolio generation**: Fill in your details and get a ready-to-share website.
- **Integrated AI assistant**: Receive smart suggestions and personalized answers about your profile.
- **Modern and customizable design**: Responsive templates adaptable to your style.
- **PDF export**: Download your portfolio as a PDF for offline sharing.
- **Dashboard**: Easily manage and edit your portfolio.
- **Guided onboarding**: Simple process for new users.

## Technologies Used

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Drizzle ORM](https://orm.drizzle.team) + SQLite
- [Clerk](https://clerk.com) (authentication)
- [AI SDK](https://sdk.vercel.ai/) + [OpenRouter](https://openrouter.ai/) (AI assistant)

## Project Structure

- `src/app` — Main routes, dashboard, onboarding, and portfolios.
- `src/app/(portfolios)/[userId]` — Portfolio view by user.
- `src/app/(portfolios)/[userId]/pdf` — PDF export and view.
- `src/app/api/portfolio-ai` — AI assistant endpoint.
- `src/app/(app)/dashboard` — User dashboard and portfolio editing.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/youruser/portfolio-generator.git
   cd portfolio-generator
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or npm install / yarn install
   ```
3. Set up environment variables (see `.env.example`).
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. Go to `http://localhost:3000` and start creating your portfolio.

## Useful Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build the app for production
- `pnpm db:migrate` — Run database migrations
- `pnpm lint` — Lint the codebase

## Deployment

You can easily deploy to [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), or using Docker. Check the Next.js documentation for more details.

## License

MIT
