This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Project Deployed in Vercel: [Stripe App]()

Nextjs 14 Project using:

- Nextjs 14 Features
  - Src and App Folder
  - Import Alias (@)
  - .env.local and .env
  - Metadata
  - Turbo Pack -> npx next dev --turbo
  - Streaming -> Skeleton Screens
  - Client Side
    - Google Fonts and TailwindCSS, NextUI and Framer Motion, Flowbite Icons SVG, Tabler Icons
    - Link and Image Componente
    - Layout and Page Structure
    - Client Routes
    - Dynamic Routes ([id] folder)
    - Async GET in page.tsx -> Server Components
    - Suspense React Component
    - Page not-found.tsx, loading.tsx and notFound() Function
    - useRouter(), useParam() and useSearchParams Hooks
    - Revalidate
    - Server Actions
    - Route Groups
  - Server Side
    - API Routes using Route Handlers API
    - params and searchParams in Route Handlers API
    - Client and Server Components ('use client' and 'use server')
- ESLint -> npx eslint --init
- Stripe
  - Stripe Checkout API
  - Stripe Customer Portal
  - Stripe Webhooks
  - Stripe CLI
- Firebase
- Supabase

### Links Projects

- [FaztCode - Nextjs Stripe Tutorial - Cobrar Suscripciones](https://www.youtube.com/watch?v=1PimrCYtJ0M)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
