# Scribbly Frontend

The React frontend for Scribbly — a note-taking app where users can write, organize, search, and manage their notes. Built with React 19 and Vite, styled with TailwindCSS, and connected to the Scribbly backend API via Axios. The build output is served directly through the backend in production, so there's no separate frontend hosting needed.

Backend repo: [Scribbly-backend](https://github.com/Samadali123/Scribbly-backend)  
Live API: `https://scribbly-backend.onrender.com`


## Features

**Auth flow** — users register and log in through forms wired to the backend. JWT is handled via HTTP-only cookies on the server side, so the frontend never touches the token directly. Protected routes redirect unauthenticated users to login automatically.

**Notes** — create, view, edit, and delete notes. The notes list updates immediately after any action without requiring a page refresh.

**Search and filter** — users can search their notes by keyword and filter by category or tag without leaving the page.

**UX polish** — skeleton loaders show while data is fetching so the page never looks broken. Toast notifications give feedback on every action — note saved, error occurred, logged out. A spinner handles longer async operations. These details matter more than people give them credit for.

**State management** — the app uses Context API throughout rather than Redux. For an app of this scope it keeps things readable without the boilerplate overhead.

## Project Structure

Scribbly-FrontEnd/
├── src/
│   ├── components/       # Reusable UI — NoteCard, Navbar, Loader, Skeleton, etc.
│   ├── services/         # Axios API calls — auth, notes, search
│   ├── utils/            # Helper functions shared across components
│   ├── Context.jsx       # Global auth and notes state via Context API
│   ├── App.jsx           # Root component, route definitions
│   ├── main.jsx          # React entry point
│   └── index.css         # Global Tailwind base styles
├── index.html
├── vite.config.js        # Vite config — proxy setup for backend API calls in dev
└── eslint.config.js

## Tech Stack

React 19 · Vite · TailwindCSS · React Router DOM v7 · Axios · Context API · React Hook Form · React Toastify · React Loading Skeleton · React Loader Spinner


## Getting Started

Make sure the [Scribbly backend](https://github.com/Samadali123/Scribbly-backend) is running locally first, since the frontend proxies API calls to it in development.

bash
git clone https://github.com/Samadali123/Scribbly-FrontEnd.git
cd Scribbly-FrontEnd
npm install
npm run dev

Opens at `http://localhost:5173`. API calls proxy to `http://localhost:5000` — configure this in `vite.config.js` if your backend runs on a different port.


## Build for Production

bash
npm run build

The `dist/` folder contains the compiled static files. In production, the Scribbly backend serves this build directly using Express's static file middleware — so you deploy one thing (the backend on Render) and it handles both the API and the frontend.


## Author

Syed Samad Ali — [LinkedIn](https://www.linkedin.com/in/syedsamad125)
