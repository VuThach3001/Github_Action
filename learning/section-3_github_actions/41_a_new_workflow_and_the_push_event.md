# Cornell Notes

## Topic: A New Workflow and the Push Event

## Date: 31/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Events (Workflow Triggers)**

- GitHub Actions workflows can be triggered by various events, such as push events, pull request events, and schedule events.
- The `on` key in the workflow YAML file specifies the events that will trigger the workflow.
- For example, to trigger a workflow on push events, you can use the following configuration:
```yml
on: push
```
- This means that the workflow will run every time a commit is pushed to the repository.
- Most of the events are repository-related, meaning they occur within the context of a specific repository, and there you got events like `push`, `pull_request`, `issues`, etc happening.
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
