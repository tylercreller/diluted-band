# Diluted Band Website

### Getting Started

Install Dependencies

```
npm install
```

or

```
yarn install
```

#### Setup Babel

```
npm install -g babel-cli@6.24.1
```

or

```
yarn global add babel-cli@6.24.1
```

#### Setup Live Server

```
npm install -g live-server
```

or

```
yarn global add live-server
```

#### Running The Boilerplate

In your CLI run the follow (order should not matter)

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

This will set a watch on the src/app.js folder and output the translated code to public/scripts/app.js. Then run the following...

```
live-server public
```

This will run live-server on the public folder, deploying the generated file we created in the previous step. A browser should automatically open with the boilerplate app!

Make some changes to src/app.js and you are good to go! You should see your changes update in the browser with a hot reload.
