# Angular multiproject

> Angular supports workspaces with multiple projects. This type of development environment is suitable for enterprises that use a "monorepo" development style, with a single repository and global configuration for all related Angular projects, such as a suit of apps integrated in a SPA. A multi-project workspace also supports library development. A simple example might be a button that sends users to your company website, that would be included in all apps that your company builds.

This repo is an Angular multiproject example covering:

* Creation of a SPA (`main`) comprising two independent apps (`app1` and `app2`)
* Lazy loading of each app within the SPA
* Running each independent app in a standalone fashion
* Creation of a library (`common`) used by all of the previous apps
* Using the library without publishing it to any private or public npm registry

## Install

* Install [nodejs and npm](https://github.com/tj/n#installation)
* Install Angular CLI: `$> sudo npm install -g @angular/cli`
* Install project dependencies: `$> npm install`

## Usage

The example consists of a main app (in the top) that navigates and shows one of the two independent apps (in the bottom). Apps share a singleton service from the common library, that can be called from inside each of them to see how it reflects in all of them. A component from the common library is also used within the apps.

* To execute the SPA with automatic lib+apps code changes reloading:
  1. `$> npm start`
  2. Open `http://localhost:4200` in a browser

* To see lazy loading working:
  1. Open browser dev tools > network
  2. Reload `http://localhost:4200` page
  3. Check that only `main.js` and `app1-main-module.js` have been requested
  4. Click on `App 2`
  5. Check that `app2-main-module.js` has been requested

* To independently execute each app outside the SPA:
  * `$> APP=app1 npm start`
  * `$> APP=app2 npm start`

## References

https://angular.io/guide/file-structure

https://angular.io/guide/creating-libraries
