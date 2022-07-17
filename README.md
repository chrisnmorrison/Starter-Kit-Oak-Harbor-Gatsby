# Starter-Kit-Gatsby
 
This starter kit is based on [Oak Harbor Web Design's Starter Kit](https://github.com/Oak-Harbor-Kits/Starter-KitV3), with several major changes.

- Turned all components into Gatsby + React Components.
- Convert (most) images to Gatsby Images, which optimize and generate fallback images automatically.
- Add PurgeCSS to build pipeline.
- Improve SEO by utilizing React Helmet and Gatsby recommended SEO practices (a few TODO's here still)
- Static Forms integration (optional, Netlify Forms is easy to set up as well)

To use this starter, you primarily must understand React. Gatsby simply adds another layer of awesome features. React usage here is primarily for reusable components, and this project is built to be easy to understand for React beginners.

## Usage

For local development:

```
yarn install
yarn start
```

Then, navigate to `localhost:8000` in your browser for live preview. If using GraphQL, nagivate to `localhost:8000/___graphql` to build queries.

To build a production site:

```
yarn build
```

If using npm instead of yarn, you will need to edit the `package.json` file and modify the yarn commands.

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

## To-Do's

This Gatsby site is ready for production, but there still a few to-do's that could be addressed:

- JS DOM actions are in Navbar.jsx - is there a better place to import it?
- Some Components are too large to be "React-esque". Trim them down, create more components.
- Organize `<head>` code better
- Move more `less` code to styled components
- Ensure PurgeCSS works properly on each build - possibly need to look over settings
- Fine tuning - any way to reduce build time?
- Create more components for more flexibility
- Gallery on mobile works, but is a bit janky
- Gallery should have a lightbox popup

## Contributing & License

You're welcome to fork, edit, and submit your contributions to this project if you're interested. If you make changes and publish your own version, be aware that this project is licensed. Although the license is flexible, to comply with the CC4.0 license, you must give credit to both myself and the original author, [Oak Harbor Web Design's Starter Kit](https://github.com/Oak-Harbor-Kits/Starter-KitV3).

## Anything else

Contact me at [mesmerdesignca@gmail.com](mailto:mesmerdesignca@gmail.com) if you have any questions/concerns.