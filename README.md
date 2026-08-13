<<<<<<< HEAD
# Gaurab Bhul — Developer Portfolio

A responsive, dark-mode portfolio for **Gaurab Bhul**, a MERN Stack Developer. It presents selected work, technical skills, experience, and contact options in a polished interactive interface.

## Highlights

- Responsive glass-style navigation with desktop and mobile menus
- Animated hero with an interactive MERN technology orbit
- Project showcase with a featured e-commerce project and live demo link
- Skills, services, experience, and contact sections
- Smooth in-page navigation and motion effects
- Dark, accessible, mobile-first interface

## Built with

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Three.js / React Three Fiber

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Installation

```bash
git clone <your-repository-url>
cd portfolio-main
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## Project structure

```text
app/
  page.tsx               # Portfolio page composition
  layout.tsx             # Metadata, font, and theme setup
  globals.css            # Global Tailwind styles
components/
  Hero.tsx               # Introduction and animated profile orbit
  RecentProjects.tsx     # Featured and project-card showcase
  ui/FloatingNavbar.tsx  # Responsive sticky navigation
data/
  index.ts               # Navigation, skills, projects, and experience data
public/
  images/                # Profile image
  projects/              # Project screenshots
```

## Customization

Most portfolio content is maintained in [`data/index.ts`](./data/index.ts).

| Update | Location |
| --- | --- |
| Navigation labels and targets | `navItems` |
| Skills | `skills` |
| Project details, repository and demo links | `projects` |
| Experience | `workExperience` |
| Social links | `socialMedia` |

To update the hero profile image, replace [`public/images/profile.jpg`](./public/images/profile.jpg) while keeping the same filename, or update its path in [`components/Hero.tsx`](./components/Hero.tsx).

## Featured project

The featured full-stack e-commerce project includes a live demo:

- [Open the e-commerce demo](https://final-ecom-iota.vercel.app/)

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimized production build |
| `npm start` | Starts the production server after building |
| `npx tsc --noEmit` | Checks TypeScript types without emitting files |

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/new). Import the repository, keep the default Next.js build settings, and deploy.

For other providers, run `npm run build` and use the standard Next.js deployment process for that platform.

## License

This project is intended as a personal portfolio. Reuse or adapt it with appropriate attribution.

---

Built by **Gaurab Bhul**.
=======
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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 3add0773ae9da403c44abb48b5a4330893f4b93c
