# History Site

A small React + Vite app that explores historical events using the public Muffin Labs history API. The UI includes a hero header and three views: Today, By Date (DD-MM), and Since (year).

## Features

- Today view for events on the current day
- By Date view for a specific day and month (DD-MM)
- Since view to filter events from a given year
- Responsive layout with a styled header and timeline

## Routes

- / -> Today view
- /by-date -> By Date view
- /since -> Since view

## Data Source

- <https://history.muffinlabs.com>

## Getting Started

1) Install dependencies
   - npm install
2) Start the dev server
   - npm run dev

## Scripts

- npm run dev
- npm run build
- npm run preview
- npm run lint

## Project Structure

- src/components -> UI building blocks
- src/pages -> Route-level views
- src/router -> App routes
- src/data -> Data fetching hook
- src/types -> API response types
- src/layout -> Shared layout shell

## Notes

- By Date accepts DD-MM (e.g., 22-08).
- Since accepts a 4-digit year (e.g., 1987).
