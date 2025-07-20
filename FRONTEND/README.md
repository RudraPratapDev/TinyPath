# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Deployment Instructions

## Environment Variables

Create a `.env` file in the root of the `FRONTEND` directory with the following:

```
VITE_API_URL=https://your-backend-url.com
```

Replace `https://your-backend-url.com` with your actual backend URL (e.g., from Render, Railway, or your own server).

## Vercel Deployment

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. In Vercel dashboard, go to Project Settings > Environment Variables and add:
   - `VITE_API_URL` = `https://your-backend-url.com`
4. Deploy!

---

## Local Development

For local development, you can set:
```
VITE_API_URL=http://localhost:3000
```
