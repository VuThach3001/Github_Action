# Cornell Notes

## Topic: Creating a First Workflow

## Date: 31/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Workflow**
- By adding a YAML file in the `.github/workflows` directory of a repository, you can create a workflow.
- A workflow is a configurable automated process that will run one or more jobs.
- You can give your workflow a name by adding a `name` key to the YAML file. This name will be displayed in the GitHub UI.
```yml
name: My First Workflow
```
- After giving this workflow a name, you can define the events that will trigger it and the jobs that it will run.you have to define when this workflow should be executed.
```yml
on: workflow_dispatch
```
- The `on` key is just like a `name`, a reserved keyword or `name` for which GitHub Actions will be looking.
- For this moment, we will use the `workflow_dispatch` event, which allows you to manually trigger the workflow from the GitHub UI.
- Now we need to have a work that should be done. We can define jobs under the `jobs` key.
```yml
jobs:
```
- `jobs` does not take a value immediately. Instead, it is a parent key for all the jobs that will be defined in this workflow. Instead, we need to move to a new line and hit the Tab key to create an indentation.
```yml
name: My First Workflow
on: workflow_dispatch
jobs:
    first-job:
```
- We have to define a runner for this job. A runner is a server that has the GitHub Actions runner application installed. This application listens for available jobs, runs one when it is available, and then reports the progress and results back to GitHub. You can take it with the argument `runs-on`, which specifies the type of runner that the job will run on.
```yml
    first-job:
        runs-on: ubuntu-latest
```
- After on, we have to define the steps that this job will perform. Steps are individual tasks that will be executed as part of the job. Each step can run commands or use actions to perform specific tasks.
- Every step comes with a `dash` (`-`) to indicate that it is a list item under the `steps` key.
```yml
        steps:
            - name: Print Greeting
              run: echo "Hello, World!"
            - name: Print Goodbye
              run: echo "Goodbye, World!"
```
- In this example, we have defined a single step that prints "Hello, World!" to the console.
- With the sequential execution of steps, the output will be displayed in the order they are defined.

**2. Running the first workflow**
- To run the workflow, go to the "Actions" tab of your GitHub repository.
- You should see your workflow listed there. Click on it to view the details.
- From there, you can manually trigger the workflow by clicking the "Run workflow" button.

**3. Running Multi-Line Shell Commands**
- You can run multi-line shell commands in a single step by using the `|` character.
```yml
        steps:
            - name: Print Greeting
              run: |
                echo "Hello, World!"
                echo "Goodbye, World!"
```
- In this example, we have defined a single step that prints "Hello, World!" and "Goodbye, World!" to the console.
- With the sequential execution of steps, the output will be displayed in the order they are defined.

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
