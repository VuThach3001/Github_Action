# Sections 6: Using Environment Variables and Secrets

## Topic: Implementing Environment Variables

## Date: 28/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Set up Environment Variables**
- In GitHub Actions, you can set environment variables at different levels: workflow, job, or step.
- Example of setting environment variables at the workflow level:
```yaml
name: CI

on:
  push:
    branches:
      - main

env:
  MONGODB_DB_NAME: gha-demo
  MONGODB_CLUSTER_ADDRESS: vuthach.kdc6l5v.mongodb.net
  MONGODB_USERNAME: vuthach
  MONGODB_PASSWORD: F8JQ47gtZ8IB54Xe
  PORT: 8080

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run tests
        run: npm test
```
- The location of setting the environment variables determines their scope and availability.
- If you set the environment variables in a specific job, they will **only be available** within that job.




---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
