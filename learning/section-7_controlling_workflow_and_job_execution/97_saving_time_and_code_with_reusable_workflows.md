# Sections 7: Controlling Workflow and Job Execution

## Topic: Including and Excluding Values Matrix Strategy

## Date: 04/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Including and Excluding Values**
- In a matrix strategy, you can include or exclude specific combinations of values to control which jobs are run.
- This is useful when certain combinations are not relevant or would lead to redundant testing.
- Usable workflows can be defined as below and named as `reusable.yml`:
```yml
name: Usable Deploy
on: workflow_call
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        run: echo "Deploying application..."
```
- And the file can be called in another workflow like this:
```yml
name: Main Workflow
on: push
jobs:
  call-reusable:
    uses: ./.github/workflows/reusable.yml
```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
