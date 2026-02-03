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
- On the output of the GitHub Actions run, the step will be marked as successful until we open the details, where we can see that the step actually failed.
- This allows subsequent steps to run, such as uploading test reports.
- There are 2 properties available to check the outcome of a step:
  - `steps.<step_id>.outcome`: This property returns the outcome of the step, which can be 'success', 'failure', or 'skipped'. This is the result of a completed step after `continue-on-error` has been applied.
  - `steps.<step_id>.conclusion`: This property returns the conclusion of the step, which can be 'success', 'failure', 'neutral', 'cancelled', or 'timed_out'. This is the result of the step before `continue-on-error` is applied.

**3. Shall we use `if` or `continue-on-error`?**
- If you want to run entire steps regardless of the outcome of previous steps or jobs, use `continue-on-error`.
- If you want to conditionally run steps based on the outcome of previous steps or jobs, use `if` conditions.

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
