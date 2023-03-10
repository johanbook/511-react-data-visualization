# Contributing

The document outlines the development process of the
**511-react-data-visualization** project.

## Setting up a local development environment

Start by cloning the repository and run `npm i -D`. Start the development server
by running

```sh
npm run start
```

## Release procedure

This project uses [semver](https://semver.org/), handled by the NPM package
[standard-version](https://www.npmjs.com/package/standard-version). For creating
a new release, run the following commands:

```sh
npm run release
git push --follow-tags origin main
```
