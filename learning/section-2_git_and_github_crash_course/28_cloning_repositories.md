# Cornell Notes

## Topic: Cloning repositories

## Date: 29/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Cloning a repository**
- To create a local copy of a remote repository, use the `git clone` command followed by the repository URL:
  ```
  git clone https://github.com/username/repository.git
  ```
- This command creates a new directory with the same name as the repository and initializes a Git repository inside it.
- It also fetches all the files and commit history from the remote repository.
- It helps you in the scenarios where you are joining an existing project or want to work on a project hosted on GitHub.

**2. Get remote URL**
- To get the remote URL of a cloned repository, use the command:
  ```
  git remote -v
  ```
- This command displays the remote URLs associated with the repository, including the fetch and push URLs.
- Or you can use `get-url` command:
  ```
  git remote get-url origin
  ```
---

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
