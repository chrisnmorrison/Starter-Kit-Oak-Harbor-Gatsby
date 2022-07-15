# Starter-Kit-Gatsby
 
This starter kit is based on [Oak Harbor Web Design's Starter Kit](https://github.com/Oak-Harbor-Kits/Starter-KitV3), with several major changes.

- Turned all components into Gatsby + React Components.
- Convert images to Gatsby Images, which optimize and generate fallback images automatically.
- Add PurgeCSS to build pipeline.
- Improve SEO by utilizing React Helmet (a few TODO's here still)

To use this starter, you primarily must understand React. Gatsby simply adds another layer of awesome features. React usage is primarily for reusable components, and this project is built to be easy to understand for React beginners.

## Usage

For local development:

```
yarn install
yarn start
```

Then, navigate to `localhost:8000` in your browser for live preview. If using GraphQL, nagivate to `localhost:8000/___graphql`.

To build a production site:

```
yarn build
```

If using npm, you will need to edit the `package.json` file and modify the yarn commands.

## Other considerations

Gatsby images are incredibly powerful, but are known to be buggy. If you add/remove/edit the `<GatsbyImage/>` components, you should clean Gatsby's cache and restart your local server. This may clear other bugs as well caused by Gatsby's cache:

```
yarn clean

OR

gatsby clean
```

It may be beneficial to edit your `package.json` to the following, but this will result in longer local build times:

```
"scripts": {
    ...
    "start": "gatsby clean && yarn run develop",
    ...
  },
```

## 