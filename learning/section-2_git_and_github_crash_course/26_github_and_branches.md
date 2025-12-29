# Cornell Notes

## Topic: Github and Branches

## Date: 29/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Create branch options**
- In Git, branches are used to develop features, fix bugs, or experiment in isolated environments.
- To create a new branch, use the command:
  ```
  git branch <branch-name>
  ```
- To switch to the new branch, use:
  ```
  git checkout <branch-name>
  ```
- Alternatively, you can create and switch to a new branch in one command:
  ```
  git checkout -b <branch-name>
  ```
- After going to the side branch, you can make changes and commit them without affecting the main branch.
- Then, you can switch back to the main branch and start merging changes from the side branch when it is fully tested and ready.
  ```
  git checkout main
  git merge <branch-name>
  ```
- Adn the push it to remote:
  ```
  git push origin main
  ```


---

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
