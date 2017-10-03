<p align="center"><img src="https://cloud.githubusercontent.com/assets/3129129/22811426/bb69dc06-ef0c-11e6-8092-a0bea9060b35.png"/></p>

Starter kit for rapid website development. 

## Get Started
1. **Clone the project**. `git clone https://github.com/sadsa/peech.git`.
2. **Run the example app**. `yarn start`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically.
3. **Having issues?** See "Having Issues?" below.

## Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**. 
3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

## Having Issues? Try these things first.
1. Make sure you ran all steps in [Get started](https://github.com/sadsa/peech/blob/master/README.md#get-started) including the [initial machine setup](https://github.com/coryhouse/react-slingshot#initial-machine-setup).
2. Run `yarn` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node. Or install [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.

## Technologies
This project offers a rich development experience using the following technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today. | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org),
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto)
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues.
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more.
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [Yarn Scripts](https://yarnpkg.com/lang/en/docs/cli/run/)| Glues all this together in a handy automated build.