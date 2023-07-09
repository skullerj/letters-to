# Letters To

This web app allows you to link a Notion database to show a page for each entry.
The idea is that you are sending letters to someone through Notion and they can receive them in the website.

## Dependencies

This project is buit using Svelte, Tailwind and Typescript.

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

This repo also includes the neccesary configuration to deploy to Netlify. To do so you just need to create a Github repo, upload your code there and link that repo with Nelify, it should automatically detect that this is an Svelte project.
