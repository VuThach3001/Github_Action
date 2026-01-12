# Sections 4: Workflows and Events - Deep Dive

## Topic: Module Summary

## Date: 12/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Module Summary**
- **Available Events**:
  - There are many supported events
  - Most are repository-related (e.g., `push`, `pull_request`)
  - But some are more general (e.g., `schedule`)
- **Pull Requests & Forks**
  - Initial approval needed for pull requests from forked repositories
  - Avoids spam from untrusted contributors
- **Activity Types**
  - The exact type of event that should trigger a workflow
  - **Examples**: Opening or editing a pull request should trigger the workflow
- **Cancelling & Skipping**
  - Workflows get cancelled automatically when jobs fail
  - You can manually cancel workflows
  - You can skip via `[skip ci]` etc. in commit message
- **Event Filters**
  - For push & pull_request: Add filters to avoid some executions
  - Filter based on target branch and/or affected file paths
---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
