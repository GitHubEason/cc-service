# CourtCanva service

RESTful APIs using Node.js, Express, and Mongoose.



**Quick Start**

install dependencies
```
npm install
```

```
npm run dev
```

**Table of Contents**
- [CourtCanva service](#courtcanva-service)
  - [Features](#features)
  - [Commands](#commands)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)
  - [Logging](#logging)

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) 
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Commands

Running locally:

```
npm run dev
```

## Environment Variables

The environment variables can be found and modified in the `.env.example` file. They come with these default values:

```
# Port number
PORT=
API_PREFIX =
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--app.js          # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:8080/api-docs/` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the controllers file.

## Logging

Import the logger from `src/utils/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

