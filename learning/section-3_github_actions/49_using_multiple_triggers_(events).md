# Cornell Notes

## Topic: Using multiple triggers (events)

## Date: 05/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Multiple triggers**
- Thus far, we always only had one simple trigger for our workflows, e.g., `on: push`.
- But we instead also want to allow ourselves to manually trigger the workflow from the Actions tab in GitHub.
- By wrapping multiple triggers in an array, we can achieve this:
```yml
name: Test project
on: [push, workflow_dispatch, ...]
jobs:
  test:
    runs-on: ubuntu-latest
    defaults:
      ...
  deploy:
    needs: test
    runs-on: ubuntu-latest
    defaults:
      run:
        ...
```
- This is the easiest way to add multiple triggers to a workflow.
---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
