# Sections 7: Controlling Workflow and Job Execution

## Topic: Working with Special Conditional Functions

## Date: 03/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Special Conditional Functions**
- GitHub Actions provides special conditional functions that can be used within the `if` keyword to control the execution of jobs and steps based on specific conditions.
- Some commonly used special conditional functions include:
- `failure()`: Returns true if any previous Step in the Job or Job has failed.
- `success()`: Returns true if all previous Steps in the Job or Job have succeeded.
- `always()`: Always returns true, regardless of the outcome of previous Steps or Jobs (e.g. when a job is canceled).
- `cancelled()`: Returns true if the workflow was cancelled.

```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
