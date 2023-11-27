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
- Bcrypt for hashing

## Steps to run the application

- Clone the repository to your local machine.
- Run "npm i" to install the packages used
- Add your .env file that should include the following
  - DATABASE_URL: PostgreSQL Database URL that includes the username, password and the name of the database
  - JWT_SECRET: That includes the secret key of the authentication
  - JWT_EXPIRES_IN: Duration that the JWT expires in
  - PORT: The port you want to run the backend application on
  - SALT: The salt used for hashing
- Run "npm run prisma:generate" to generate the prisma client
- Run "npm run primsa:migrate" to create the tables
- Run "npm start" to start the server
- You can find the docs at "http://localhost:3000/docs"

## Env file Example

DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
SALT= post
JWT_SECRET=post
JWT_EXPIRES_IN=90d
SALT="$2b$10$70DKBf.U7AIyLJJevX.yDO"

## Notes

- Make sure to add the Authorization header (Bearer Token)
