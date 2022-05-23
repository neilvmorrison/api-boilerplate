# API Boilerplate

RESTful API boilerplate using [Koa](https://koajs.com/#introduction), [Koa-Router](https://github.com/ZijianHe/koa-router#module_koa-router) and [Typeorm](https://typeorm.io/).

## Setup

1. `yarn install`
2. Create `.env` file and copy + paste the contents of `.env.sample`.
3. Configure the database of your choosing and place the appropriate variables in `.env`

## Run

1. `yarn dev` for local development: changes reflected in real time.
2. `yarn build` to create a build
3. `yarn start` to run from build

## Development

Routes implement methods on a service, services maniupulate entities and entities correspond to tables in your database.

### Create an Entity

NOTE: It's recommended that you review the `BaseEntity` found in `src/entity/base.entity.ts` to ensure that it conforms to the desired structure

In the `src/entity` directory, create a new file with the naming convention `myentity.entity.ts`. Import the appropriate typeorm classes an construct the columns and appropriate relationships for the database. Reference the [entity section](https://typeorm.io/entities) of typeorm's documentation for more information.

### Create a Service

Create a file in the `src/services` directory following the convention `myservice.service.ts`. It's recommended that we compose this new service with the BaseService class exported from `base.service` which contains basic CRUD operations to get started. The `*.service` classes are where the business logic of the application will live.

### Create a Route

Create a file in the `src/routes` directory following the naming convention `myroute.router.ts`. This application leverages [Koa Router](https://github.com/ZijianHe/koa-router#module_koa-router) to scaffold out api endpoints. Be sure to export `router.routes()` from `myroute.router.ts` and import it into `src/routes/index.ts`, where it should be placed as an argument in the `router.use()` method. An example for `testrouter` ships with this repository.
