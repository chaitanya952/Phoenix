# Phoenix Baby Products Website

This is the official website for Phoenix Baby Products, a leading manufacturer of premium baby products including feeding bottles, sippy cups, and baby care essentials.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Vercel Deployment and Local Development

- **Production API endpoint**: The app calls the Vercel Serverless Function at `/api/contact`.
- **Environment variables** (set in Vercel Project Settings → Environment Variables):
  - `SMTP_HOST`
  - `SMTP_PORT` (e.g., `587`)
  - `SMTP_USER`
  - `SMTP_PASS`
  - `FROM_EMAIL` (optional, defaults to `SMTP_USER`)
  - `TO_EMAIL` (optional, comma-separated list)

### Local development

1) Install dependencies:
   ```bash
   npm install
   ```
2) Start CRA dev server:
   ```bash
   npm start
   ```
3) Run the serverless function locally with Vercel CLI (proxies `/api/*`):
   ```bash
   npm i -g vercel
   vercel dev
   ```
4) The app is configured to use the same-origin function locally via `.env.local`:
   ```bash
   REACT_APP_CONTACT_API_URL=/api/contact
   ```

- **Note**: `server.js` was removed; use the serverless function at `api/contact.ts` instead.
