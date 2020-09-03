# AngularStarterkit

Inspired by [this](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7), [this](https://itnext.io/choosing-the-right-file-structure-for-angular-in-2020-and-beyond-a53a71f7eb05) and [this](https://angularbites.com/building-an-enterprise-grade-angular-project-structure/) article about Angular folder structure.

## Folder structure

### Recommended subfolder structure

#### api

- config
- constants
- interceptors
- mocks
- models
- services
- utils

#### core

core.module.ts

- components (static components like header & footer)
- config
- constants
- models
- router
- services
- utils

#### shared

shared.module.ts

- components
- models
- router
- utils

#### feature

feature.module.ts
feature.component.ts
feature.component.html
feature.component.scss

- components
- models
- router
  - feature-routing.module.ts
- services
- tests
- utils

#### ../assets

- fonts
- i18n
- icons
- images
- documents

### What belongs to subfolders

#### Models

- Interfaces
- Classes
- Enums

#### Router

- Routing module
- Router guards
- Router resolvers

#### Utils

- Directives
- Pipes
- Decorators
- Helper functions
- Non-router guards

### What do root folders mean

#### Core module

The CoreModule takes on the role of the app root module, but is not the module that gets bootstrapped by Angular at run-time. The common denominator between the files present here is that we only need to load them once, and that is at run-time, which makes them singleton. The module contains root-scoped services, static components like the navbar and footer, interceptors, guard, constants, enums, utils, and universal models. To prevent re-importing the module elsewhere, we should add a module-import-guard in it's constructor method.

#### Shared module

A module that defines components, utils etc. that are shared between lazy loaded feature models.

The SharedModule allows us to organize and streamline our code. The shared module shouldn't have any dependency to the rest of the application, and should therefore not rely on any other module. It should contain all the reusable modules, lazy loaded feature modules required to operate. You should add commonly used directives, pipes and components here. Many third-party libraries are available as NgModules such as Material Design, and exposing them through the SharedModule might be a good idea.

#### Api

All information related to api, should be a middleware between actual backend api and the frontend app. Should contain only api services, related helpers and api mocks, no components, routing or modules. All services should be providedIn: 'root'.

#### Features

All logically distinct app modules, should be lazy loaded, can have children

#### ../Styles

In a similar way to how we want to avoid bloating up the AppModule as the application grows, it's also true for the styles.scss file.You should instead create a styles folder, which contains mixins or css-functions, responsible for their own areas. These files are then imported in the appropriate order inside the styles.scss file, providing their global styles to the rest of the app. Create mixins for reusable css-snippets, and scope the associated logic together.

#### ../Assets

All app's assets.

---

## Angular CLI Commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
