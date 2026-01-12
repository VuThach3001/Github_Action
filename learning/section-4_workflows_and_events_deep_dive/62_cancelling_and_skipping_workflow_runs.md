# Sections 4: Workflows and Events - Deep Dive

## Topic: Cancelling Workflows and Skipping Workflow Runs

## Date: 12/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Cancelling & Skipping Workflow Runs**
- **Cancelling:**
  - By default, workflows get cancelled if **Jobs** fail.
  - By default, a **Job** fails if at least one **Step** fails.
  - You can also cancel workflows manually via the GitHub UI.
- **Skipping:**
  - By default, all matching events start a workflow.
  - Exception for `push` & `pull_request`.
  - Skip with proper commit message:
    - Include `[skip ci]` or `[ci skip]` in the commit message.
    - Example: `git commit -m "Update README [skip ci]"`
---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
