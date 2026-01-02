# Cornell Notes

## Topic: Adding Multiple Jobs

## Date: 02/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Overview**
- Workflows can have multiple jobs that run in parallel or sequentially.
- The workflow should not having only the testing, but it should eventually also deploy the code after testing is successful, uploading to some hosting server.

**2. Syntax**
- With the previous workflow, we had a single job called `test`.
- Now we want to add another job called `deploy`.
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
*Note:* 
- *This is very important: Every job gets its own runner - its own virtual machine that's totally isolated from other machines and jobs*
- *These 2 jobs test and deploy are independent and will run in parallel.*

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
