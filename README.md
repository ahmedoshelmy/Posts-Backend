# Posts-Backend

This includes REST APIs for Posts application that includes several features:

## Features

- Register endpoint.
- Login endpoint.
- Create post endpoint.
- List all posts endpoint.
- Edit only user-related posts endpoint.
- Delete only user-related posts endpoint.

## Used Libraries and Frameworks

- Typescript Language
- Express Framework
- Prisma ORM
- PostgresSQL Database
- Swagger for Documentation
- JWT for authentication
- Zod for data validation

## Steps to run the application

- Clone the repository to your local machine.
- Run "npm i" to install the packages used
- Add your .env file that should include the following
  - DATABASE_URL: PostgreSQL Database URL that includes the username, password and the name of the database
  - JWT_SECRET: That includes the secret key of the authentication
  - PORT: The port you want to run the backend application on
