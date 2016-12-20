# Contributing

Contributions are **welcome!**

Contributions can be made via a Pull Request on [Github](https://github.com/mike182uk/CoffeeWriter).

## Reporting an Issue

Please report issues via the issue tracker on [Github](https://github.com/mike182uk/CoffeeWriter). For security-related issues, please email the maintainer directly.

## Pull Requests

- **[Standard JS coding style](http://standardjs.com/index.html)** - Make sure you run `npm run lint` before committing your code.

- **Document any change in behaviour** - Make sure the README and any other relevant documentation are kept up-to-date.

- **Create topic branches** - i.e `feature/some-awesome-feature`.

- **One pull request per feature**

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please squash them before submitting.

## Development

The application comes in 2 parts - The web view and the electron wrapper. Any code inside of `src/app` is for the web view and any code inside of `src/electron` is for the electron wrapper.

To work on a feature you will need to start the development server:

```
npm run dev:server
```

Once the development server is running, you can access the application in your browser by navigating to `http://localhost:3000` or you can work inside the electron wrapper:

```
npm run dev:app
```

## Install project dependencies

```
npm install -g yarn
yarn install
```

## Build the application

```
npm run build:app
```

## Run the built application before packaging

```
npm run built-app
```


## Package the application

```
npm run package
```
