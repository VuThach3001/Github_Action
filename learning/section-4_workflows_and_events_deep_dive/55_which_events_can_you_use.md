# Sections 4: Workflows and Events - Deep Dive

## Topic: Which Events Can You Use?

## Date: 11/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Available Events**

- **Repository-related**:

  | Events        | Description                                    |
  | ------------- | ---------------------------------------------- |
  | push          | Pushing a commit                               |
  | pull_request  | Pull request action (opened, closed, reopened) |
  | create        | A branch or tag was created                    |
  | fork          | Repository was forked                          |
  | issue         | An issue was opened, deleted,...               |
  | issue_comment | Issue or pull request comment action           |
  | watch         | Repository was starred                         |
  | discussion    | Discussion action (created, deleted,...)       |
  | ...           | ...                                            |

- **Other**:

  | Events              | Description                                     |
  | ------------------- | ----------------------------------------------- |
  | schedule            | Scheduled time-based events                     |
  | workflow_run        | Triggered by the completion of another workflow |
  | workflow_dispatch   | Manually triggered by a user                    |
  | workflow_call       | Can be called by other workflows                |
  | repository_dispatch | Triggered by a repository dispatch event        |

- To deeply understand all the events and their details, you can refer to the official documentation: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
