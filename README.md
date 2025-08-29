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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
# GrowthHub Project 🚀

**GrowthHub** is a modern, AI-powered platform designed to help individuals track their goals, build better habits, and grow their skills. With personalized recommendations, structured learning paths, and subscription-based features, GrowthHub empowers users to achieve their full potential.

## Features

- **Goal Tracking:** Create, update, and delete personal goals with progress tracking.  
- **Habit Management:** Log daily habits and monitor streaks for self-improvement.  
- **AI-Powered Guidance:** Personalized suggestions for projects, courses, and next steps.  
- **Learning Paths:** Structured paths with curated courses, videos, and documentation.  
- **Skill Tracking:** Set skill levels, track progress, and visualize growth.  
- **Subscriptions:** Free, Pro, and Premium plans with different levels of access.  
- **Secure Authentication:** Supports OAuth (Google, GitHub) and passwordless email login.  
- **Responsive UI:** Modern, clean interface using Tailwind CSS and Shadcn UI components.  
- **Animations & Effects:** Smooth transitions, typing effects, and interactive cards.  

---

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Shadcn UI  
- **Backend:** Next.js API Routes, Express-style RESTful endpoints  
- **Database:** PostgreSQL (via Prisma ORM)  
- **Authentication:** NextAuth.js (Google, GitHub)  
- **Payments:** Stripe Checkout for subscription management  
- **State Management & UI:** React Hooks, Framer Motion for animations, React Icons  
- **Deployment Ready:** Optimized for Vercel, supports dark mode  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/growthhub.git
cd growthhub
```

2. Install dependencies:

```bash
pnpm install
# or npm install
```

3. Set up your database using Prisma:

```bash
npx prisma migrate dev --name init
```

4. Run the development server:

```bash
pnpm dev
# or npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/growthhub
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
AUTH_SECRET=your-nextauth-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

---

## Usage

- **Dashboard:** View your active goals, habits, and skill progress.  
- **Pricing Page:** Upgrade or manage your subscription (Free, Pro, Premium).  
- **AI Guidance:** Receive personalized project ideas, learning paths, and recommendations.  
- **Goal Management:** Create, update, delete goals with progress tracking.  
- **Habit Tracker:** Log daily habits to visualize streaks and performance.  

---

## Authentication & Authorization

- Uses **NextAuth.js** with **JWT sessions**.  
- Supports OAuth providers: Google & GitHub.  
- Passwordless email login supported via Nodemailer (Ethereal testing).  
- Role-based access for Free, Pro, and Premium subscribers.  

---

## Database & Prisma

- **PostgreSQL** database managed with **Prisma ORM**.  
- Schema includes `User`, `Goal`, `Habit`, `Subscription`, and `Plan` models.  
- Example Prisma usage:

```ts
const goal = await prisma.goal.create({
  data: {
    title: "Learn Next.js",
    completed: false,
    user: { connect: { id: userId } },
  },
});
```

---

## Subscriptions & Stripe

- Stripe Checkout is used to manage subscriptions.  
- Plans: Free, Pro ($9/mo), Premium ($19/mo).  
- Webhook handles subscription status updates.  
- Only authenticated users can upgrade plans.  

## Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a Pull Request  

---

## License

This project is open-source and available under the **MIT License**.

---

💡 GrowthHub is built to help learners and professionals grow faster, smarter, and more consistently using a modern, AI-assisted platform.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
