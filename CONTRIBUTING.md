# Contributing

The document outlines the development process of the
**511-react-data-visualization** project.

## Setting up a local development environment

Start by cloning the repository and run `npm i -D`.

Create a `.env.local` file by using

```sh
cp .env .env.local
```

Acquire an API token from [511 open data](https://511.org/open-data/traffic) and
add it in the `.env` file.

Start the development server by running

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
