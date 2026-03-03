This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## AI Actuaries hub site

Single-page hub for **AI Actuaries**. It links to four pillars: SSS CADS-AI (Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI), Maestros AI, Tech Actuarial, and Sutra Blog.

### Configuration

- **Content**: Edit `lib/sub-brands.ts` for the four sub-brands (names, URLs, copy) and `lib/site-content.ts` for site name, hero, nav, audiences, footer, and meta.
- **SEO**: Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://aiactuaries.org`) in your environment so Open Graph and JSON-LD use the production URL.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. [Vercel Analytics](https://vercel.com/docs/analytics) is included via `@vercel/analytics` and loads after hydration.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
