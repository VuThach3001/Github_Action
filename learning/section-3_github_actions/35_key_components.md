# Cornell Notes

## Topic: Key Components: Workflows, Jobs, Steps and More

## Date: 29/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Workflow, Jobs and Steps**

- Once you have the repository set up with GitHub Actions, the next step is to understand the key components that make up a GitHub Actions workflow: **Workflows**, **Jobs**, and **Steps**.
- You can add workflows to GitHub repositories and many as you want to a given repository.
- This is the first thing to do when setting up an automated process with GitHub Actions.
- **Workflows** include one or more **jobs**.
- **Jobs** include one or more **steps** that will be executed in the order they are defined.

**1. Workflow**
- Attached to a repository.
- Contain one or more jobs.
- Triggered by events (e.g., push, pull request) or scheduled times.
**2. Job**
- Define a **Runner** (execution environment).
- Contain one or more steps.
- Run in parallel by default, but can be configured to run sequentially using dependencies.
- Can be conditional based on the success or failure of previous jobs.

**3. Step**
- Execute a **shell script** or an **Action**.
- Can use custom or third-party Actions from the GitHub Marketplace.
- Steps are executed in the order they are defined within a job.
- Can be conditional based on the success or failure of previous steps.

---

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
