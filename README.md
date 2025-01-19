# Portfolio website - sauvillers.dev

This is the portfolio website of Lauren Sauvillers, which can be found here: 

[sauvillers.dev](https://sauvillers.dev/)

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). The illustrations are by [unDraw](https://undraw.co/), icons by [Google](https://fonts.google.com/icons).

## 📌 Please read if you tend to use my website

I have open-sourced this website as an inspiration / reference project, or starting template for other aspiring developers. But please do credit me if you tend to use this website as your own. I have spent several amount of hours during my free time to create the perfect portfolio website of my liking, so please **do not claim it as your own**!

More features will be added over time (Blog,...), so keep an eye out for updates!

If you do find any issues, please open an issue here, and I'll look right into it.

## 🚀 Getting started

### Project structure

The project structure looks very simular to any other Astro project, it includes the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── ...
│   │   └── images/
│   │       └── ...
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── scrolling-animations.ts
│   │   └── theming.ts
│   └── config.ts
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

The main configuration file can be found in `./src/config.ts`, this includes basic configuration for the content of the website.

Global styling, and theme colors can be adjusted in `./src/styles/global.css`, it includes design tokens for setting the primary, secondary, tertiary, etc. colors.

### Installation and running local dev server

1. Install dependancies

    ```sh
    npm install
    ```

2. Start local dev server

    ```sh
    npm run dev
    ```

### Building and deployment

1. Build the production website, files will be saved to `./dist/` 

    ```sh
    npm run build
    ```

2. Preview your build locally, before deploying 

    ```sh
    npm run preview
    ```

3. Deploy your website to a hosting provider of your liking