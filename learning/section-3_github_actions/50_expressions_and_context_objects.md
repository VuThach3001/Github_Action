# Cornell Notes

## Topic: Expressions and Context Objects

## Date: 06/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Context data**
- GitHub Actions provides various context objects that give you information about the workflow run, the event that triggered the run, and the runner environment.
- Common context **objects** include:
  - `github`: Information about the GitHub event that triggered the workflow.
  - `env`: Environment variables defined in the workflow.
  - `job`: Information about the current job.
  - `steps`: Information about the steps in the current job.
- To get the better feelings of information you're getting, you can use the following step to print out the `github` context:
```yml
name: Output GitHub context
on: workflow_dispatch
jobs:
  info:
    runs-on: ubuntu-latest
    steps:
        - name: Output GitHub context
          run: echo "${{ toJson(github) }}"
```

**2. github identifier**
- The `"${{ toJson(github) }}"` expression converts the `github` context object into a JSON string, which is then printed to the console.
- This allows you to see all the details available in the `github` context, such as repository information, the event type, the actor who triggered the workflow, and more.
- Syntax:
```yml
${{ toJSON(github) }}
```
- What it will do: Converts the `github` context object into a JSON string for easier readability when printed.
- For more information about the **`github` context**, please refer to the official documentation: [GitHub Context](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context)
- For more information about the **`github` expression**, please refer to the official documentation: [GitHub Expressions](https://docs.github.com/en/actions/learn-github-actions/contexts#expressions)


---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
