
## Project Overview
![Screenshot of the project](./image_to_readme.png)

## Getting Started

First, run the development server:

```bash
# (RECOMMENDED by A.V.!) to build the Next UI
# With the case in mind to see the numerical user tests for some cases and tasks;
docker-compose up --build --force-recreate
# or
npm run dev
# To see the results of the development test build with the accordance to the specification
# To run the development tests
npx jest
# instead of using the "npm jest --verbose" use the npm test to see the result of each TTD test
npm test
# To run the development test suite for the task i, i \in {1, 2, ..., n}, where n is a general numer of all the tasks during the course, run:
nppm test task{i}_TDD # where {i} - is a number of the task is supposed to be tested 

```

[http://localhost:3000](http://localhost:3000)  with your browser will follow up with seeing the result (in case of modification the Dockerfile try another port).


## Learn More

This section was left blue with the direct author's intention

## Descrition (Breaf version)

The task implementation and the brief specification description (fullversion prepared for doxygen will be conducted far a bit latere) is inside the tasks directory, where it is also possible to find the testing set, results of which are printed in the table of the UI.

## Development Plan
Here are the main features included in the project:

- [x] User Interface developed with Next.js
- [ ] Connection to Judge0 API
- [ ] Mailer service for sending code results
- [ ] Future improvements and additions