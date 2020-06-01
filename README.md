# Angular multiproject

> Angular supports workspaces with multiple projects. This type of development environment is suitable for enterprises that use a "monorepo" development style, with a single repository and global configuration for all related Angular projects, such as a suit of apps integrated in a SPA. A multi-project workspace also supports library development. A simple example might be a button that sends users to your company website, that would be included in all apps that your company builds.

This repository is an Angular multiproject example covering:

* Creation of a SPA (`main`) comprising two independent apps (`app1` and `app2`)
* Lazy loading of each app within the SPA
* Running each independent app in a standalone way
* Creation of an Angular library (`common`) used by all of the previous apps
* Using an external repository Angular library ([`external-lib`](https://github.com/apl-tid/angular-external-lib)) like a subproject inside this workspace
* Using previous libraries without publishing them to any private/public NPM registry

## Install

* Install [nodejs and npm](https://github.com/tj/n#installation)
* Install Angular CLI: `$> sudo npm install -g @angular/cli`
* Install project dependencies: `$> npm install`

## Usage

The example consists of a main app (in the top) that navigates/shows one of the two independent apps (in the bottom). Apps share a singleton service from the common library and another one from the external library. They can be called from inside each app and see how calls reflect on all apps. Components from the common and the external libraries are also used within the apps.

![spa](https://user-images.githubusercontent.com/8087480/83434787-669fdd00-a43b-11ea-83d6-fdc16af3a1f3.gif)

* To execute the SPA with automatic libs+apps code changes reloading:
  1. `$> npm start`
  1. Open `http://localhost:4200` in a browser

* To see lazy loading working:
  1. Open browser dev tools > network
  1. Reload `http://localhost:4200` page
  1. Check that only `main.js` and `app1-main-module.js` have been requested
  1. Click on `App 2`
  1. Check that `app2-main-module.js` has been requested

* To independently execute each app outside the SPA:
  * `$> APP=app1 npm start`
  * `$> APP=app2 npm start`

## Conclusions

This project structure suits the development of SPAs consisting of different apps with some shared functionalies because: 

* Angular engine is only loaded once
* Each app is loaded on demand (lazy loading)
* Shared functionalities are easily accomplished through libraries
* Organizing them in subprojects enforces decoupling and cohesion
* Being able to independently deploy and run them can be useful for testing and for product strategy changes
* Avoids the hassle of using the NPM registry for the developed libs/apps as they are in the same workspace (it does not make sense having them in a registry because they are not intended to be shared, they are targeted to be used within this SPA)
* The "monorepo" approach fits perfectly here as most of [these PROS](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) hold true and none of the CONS apply in the context of a SPA development
* Different teams can work on their own subproject, organizing subprojects releases in different branches and merging into master the ones that are part of the next SPA release
* This model still supports libs developed in external repositories. It might be convenience when having libraries developed within the company used in different products/projects. In this example, the `./projects/external-lib/` folder is an external GIT repo, so changes in their files are handled independently of the changes in the SPA repo

## References

1. Angular workspaces: https://angular.io/guide/file-structure
1. Creating Angular libraries: https://angular.io/guide/creating-libraries
