# Sections 7: Controlling Workflow and Job Execution

## Topic: Understanding Conditional Steps and Jobs

## Date: 02/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Conditional Jobs and Steps**
- **Jobs**:
  - Jobs can be configured to run conditionally based on the success or failure of previous jobs.
  - The `if` keyword is used to define conditions for job execution.
  - Common conditions include `success()`, `failure()`, and `always()`.
- **Steps**:
  - Steps within a job can also be made conditional using the `if` keyword.
  - Ignore errors via `continue-on-error: true` to allow subsequent steps to run even if a step fails.
- **Expressions**:
  - Conditions can utilize expressions to evaluate variables, contexts, and functions.
  - Example: `if: github.event_name == 'push'` to run a job only on push events.
- We can evaluate conditions via **Expressions**.

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
