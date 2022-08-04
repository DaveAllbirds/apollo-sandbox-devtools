<div align="center">
<h1>Apollo Sandbox - Chrome Extension</h1>

<img width="1679" alt="CleanShot 2022-08-04 at 09 04 40@2x" src="https://user-images.githubusercontent.com/94491191/182894912-d68400a7-b137-4791-ac4e-34bb27175878.png">

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

</div>

## Intro

Add a private Chrome Devtools panel for querying any GraphQL endpoint.

## Features

- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Installation

1. Clone this repository for each graphql endpoint you'd like to use.
2. Change `name` and `description` in package.json - **The manifest will pull in those values and use them for the Chrome Extention**
3. Run `yarn` or `npm i`
4. Run `yarn dev` or `npm run dev`
5. Load the xxtension in Chrome
   1. Launch chrome://extensions
   2. Enable Developer Mode
   3. Click `Load unpacked extension`
   4. Select the `dist` folder in this project (after dev or build)
6. If you want to build in production, run `yarn build` or `npm run build`.

Open Devtools, select the Apollo Sandbox panel, and enter the graphql endpoint you'd like to query.

## Contentful Endpoint

```bash
https://graphql.contentful.com/content/v1/spaces/{SPACE}
# or for an environment
https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}
```

Add these header keys:

| Header Key    | Value                       |
| ------------- | --------------------------- |
| Authorization | Bearer {{CONTENTFUL_TOKEN}} |

After saving, open Settings ⚙️

Add Environment Variables:

```JSON
{
  "CONTENTFUL_TOKEN": // YOUR_CONTENT_DELIVERY_GRAPHQL_TOKEN
}
```

## Shopify Endpoint

```bash
https://{store_name}.myshopify.com/api/2022-07/graphql.json
```

Add these header keys:

| Header Key                        | Value                |
| --------------------------------- | -------------------- |
| X-Shopify-Storefront-Access-Token | {{STOREFRONT_TOKEN}} |

After saving, open Settings ⚙️

Add Environment Variables:

```JSON
{
  "STOREFRONT_TOKEN": // YOUR_STOREFRONT_TOKEN
}
```

Verify the variables are activated in the Headers tab underneath the Query section

## Notes

To change the name of the panel, open `pages/devtools/index.ts` and replace "Apollo Sandbox" with the new name:

```JS
try {
  chrome.devtools.panels.create(
    "Apollo Sandbox",
    "icon-34.png",
    "src/pages/panel/index.html"
  );
} catch (e) {
  console.error(e);
}
```
