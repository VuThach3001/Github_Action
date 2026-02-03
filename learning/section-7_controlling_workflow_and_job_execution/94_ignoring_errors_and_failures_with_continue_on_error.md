# Sections 7: Controlling Workflow and Job Execution

## Topic: Ignoring errors and Failures with continue-on-error

## Date: 03/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. continue-on-error**
- The continue-on-error keyword can be used to allow a job or step to fail without failing the entire workflow.
- This can be useful in scenarios where you want to collect all test results, even if some tests fail.
- You can set continue-on-error at the job or step level.

```yml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Run tests
        run: npm test
        continue-on-error: true
```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
