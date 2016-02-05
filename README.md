# react-gulp-starter-kit

It's a simple boilerplate for start development in React. Starter kit includes
* [react](https://github.com/facebook/react)
* [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)
* [react-router](https://github.com/rackt/react-router)
* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)

### Support for
* ES6+ syntax
* SASS/SCSS syntax
* JSX syntax
* Livereload
* Web Dev Server
* Fingerprinting assets
* Netguru Bootstrapper

## Getting started

```
$ git clone git@github.com:michalhartwich/react-gulp-starter-kit.git && cd react-gulp-starter-kit
$ npm install
$ gulp
```

Now you can access app on `http://localhost:8080`

## Commands
* `gulp` - launches default task which builds the project and runs webserver, file watcher and livereload
* `gulp build` - builds the project to the `public` folder
* `gulp clean` - clean `public` folder

## Files and directories
* `/index.html` - index html file where content is rendered
* `/js/index.js` - application root node
* `/js/routes.js` - define routes (see [react-router documentation](https://github.com/rackt/react-router))
* `/js/pages` - main components for pages loaded by router
* `/js/components` - react components
* `/stylesheets/settings` - SCSS variables and settings
* `/stylesheets/framework` - Bootstrap settings and overrides
* `/stylesheets/components` - stylesheets for react components
* `/stylesheets/components/_components.scss` - import components' stylesheets
