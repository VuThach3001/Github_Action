# Cornell Notes

## Topic: Jobs: In Parallel vs Sequential

## Date: 02/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Overview**
- In fact, we only want to deploy as long as the tests are successful.
- Therefore, we need to set up a dependency between the jobs.

**2. The `needs` keyword**
- The `needs` keyword allows you to specify that a job depends on the successful completion of another job.
- In our case, we want the `deploy` job to only run if the `test` job is successful.
- Here's how we can modify the workflow to include this dependency:
```yml
name: Test project
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: example/section-3/starting_project
    steps:
      - name: Get code
        uses: actions/checkout@v4
      - name: Install NodeJS
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: example/section-3/starting_project/package-lock.json
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: example/section-3/starting_project
    steps:
      - name: Get code
        uses: actions/checkout@v4
      - name: Install NodeJS
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: example/section-3/starting_project/package-lock.json
      - name: Install dependencies
        run: npm ci
      - name: Build project
        run: npm run build
      - name: Deploy to server
        run: echo "Deploying to server..."
```
- There are also some features for `needs` keywords:
  - You can wrap the contents in brackets to specify multiple dependencies, etc.
    ```yml
    needs: [test, job2, job3,...]
    ```


---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
