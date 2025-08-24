# Repository Overview: phoenix-baby-website

## Tech Stack
- **Frontend**: React (CRA 5), TypeScript, TailwindCSS, Framer Motion
- **Routing**: react-router-dom
- **State**: Zustand
- **Email**: Nodemailer via serverless function
- **Serverless**: Vercel-style functions in `/api`

## Scripts
- `npm start` — CRA dev server (frontend only)
- `npm run build` — production build to `/build`
- `npm test` — run tests

## Structure (key paths)
- `/src/pages` — route pages (e.g., `Contact`)
- `/src/components` — shared UI components
- `/src/utils`, `/src/hooks`, `/src/styles`, `/src/data`
- `/public` — static assets (index.html, images)
- `/api/contact.ts` — serverless contact endpoint
- `/build` — compiled production assets

## Environment Variables
- **Frontend (.env.local / .env.production)**
  - `REACT_APP_CONTACT_API_URL` — contact API URL (default `/api/contact`)
- **Serverless (set in hosting provider)**
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
  - Optional: `FROM_EMAIL`, `TO_EMAIL`

## Contact Form Flow
1. Frontend posts JSON to `REACT_APP_CONTACT_API_URL`
2. `/api/contact` validates payload
3. Nodemailer sends email using SMTP credentials
4. Responds with 200 on success; 4xx/5xx on error

## Local Development Notes
- CRA dev server does not expose `/api/*` by default
- Use `vercel dev` to run serverless locally, or point the frontend to a deployed API URL

## Deployment Notes
- On Vercel, `/api/contact` is automatically routed
- On other hosts, adjust `REACT_APP_CONTACT_API_URL` (e.g., Netlify: `/.netlify/functions/contact`) or deploy the API separately

## Common Issues
- **404 on /api/contact**: backend route unavailable on host (static hosting or different functions path)
- **500 Email server not configured**: missing SMTP envs where the function runs

## Misc
- `scripts/` contains data utilities for catalog/content; not required for app runtime