# Evolved Binary Website

[![Build Status](https://travis-ci.com/evolvedbinary/eb-website.svg?token=Z6TsvSzWtERNmadq7Jzp&branch=master)](https://travis-ci.com/evolvedbinary/eb-website)

These are the files that generate the https://www.evolvedbinary.com website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

* NodeJS 10.16+
* NPM 6.14+


### Installing

From your Terminal, run:

```bash
git clone https://github.com/evolvedbinary/eb-website.git

cd eb-website
npm install -g gulp-cli
npm install
```

### Building

If you want to build a distribution for uploading to the webserver you can run:

```bash
gulp
```

The `dist/` folder will contain the generated website, which was built from the `src/` folder.

### Running

If you want to run a copy of the website locally with support for a live-editing-update loop, run:

```bash
gulp watch
```

## Authors

The initial design was created under contract by - [Craig Steel Design](https://craigsteel-design.com)
