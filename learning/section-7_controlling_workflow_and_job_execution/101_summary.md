# Sections 7: Controlling Workflow and Job Execution

## Topic: Module Summary

## Date: 25/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Conditional Jobs and Steps**
- You can control the execution of jobs and steps based on conditions using the `if` keyword.
- This allows you to run certain jobs or steps only when specific conditions are met, such as the success or failure of previous jobs.
- Change default behavior of a job or step by using expressions to evaluate conditions.
```yml
failure()
success()
cancelled()
always()
```
- Use `continue-on-error` to allow a job or step to continue even if it fails, which can be useful for cleanup tasks or when you want to gather information about failures without stopping the entire workflow.

**2. Matrix Jobs**
- Run multiple Job configurations in parallel.
- Add or remove individual combinations.
- Control whether a single failing Job should cancel all other Matrix Jobs via `continue-on-error`.

**3. Reusable Workflows**
- Define workflows that can be called by other workflows.
- Promote code reuse and maintainability by centralizing common workflow logic.
- Reusable workflows can accept inputs and provide outputs, allowing for flexible integration with different workflows.
- Workflow can be reused via the `workflow_call` event, and you can specify the path to the reusable workflow file in the `uses` field of a job.
- Reuse any logic (as many Jobs & Steps as needed) and pass any inputs or outputs as required.
- Work with `inputs`, `outputs`, and `secrets` to make reusable workflows flexible and adaptable to different contexts.

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
