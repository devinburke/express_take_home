## Notes
- Really enjoyed using Jest.

## What I would have done differently given a large application
- Used a factory in tests for musicians, allowing concepts like `invalid musician` to be decoupled from the tests.
- Possibly used jest-extended addon for more testing tools.
- Used Redis for in-memory storage if the application requires endpoints such as `PATCH`.
- Used something like SQLite in memory storage if the endpoints did a lot of querying against musician fields.

## Added packages
- supertest
- memory-cache

## Things I could have gone either way on
- Using `abortEarly` on validations to return all errors (useful if validating a form).
- Use of semicolons.
- How I imported modules. Node.js `require` vs ES6 `exports`.

## Install dependencies
`yarn insall`

## Run server
`yarn start`

## Run tests
`yarn test`
