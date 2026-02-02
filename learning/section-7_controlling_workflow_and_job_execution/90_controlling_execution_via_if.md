# Sections 7: Controlling Workflow and Job Execution

## Topic: Controlling Execution via `if`

## Date: 02/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Conditional Execution**
- The `if` keyword allows for conditional execution of jobs and steps in GitHub Actions workflows.
- Conditions can be based on various factors, such as the outcome of previous jobs, specific events, or custom expressions.
- We can use the `id` of previous jobs to reference their results in conditions.
```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build Step
        run: echo "Building..."

  test:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Test Step
        run: exit 1  # Simulating a failure

  deploy:
    runs-on: ubuntu-latest
    needs: test
    if: needs.test.result == 'success'  # Only run if the test job succeeded
    steps:
      - name: Deploy Step
        run: echo "Deploying..."
```

**2. Controlling failure**
- The behaviour of jobs and steps can be controlled based on the success or failure of previous steps.
- There are a situation that:
  - We want to upload a test report only if the tests fail.
  - But the behavior of GitHub actions is that if a step fails, subsequent steps are skipped by default.
- To handle this, we can use the `if` condition along with the `failure()` function to ensure that the upload step runs only when the tests fail.
```yml
  - name: Upload test report
    if: failure() && steps.run-tests.outcome == 'failure'
    uses: actions/upload-artifact@v4
    with:
      name: test-report
      path: example/section-7/test.json
```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
