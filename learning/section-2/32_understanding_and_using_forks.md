# Cornell Notes

## Topic: Understanding and using forks

## Date: 29/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)
**1. Forks**
- A fork is a personal copy of someone else's repository that allows you to make changes without affecting the original project.
- To create a fork, click the "Fork" button on the original repository's GitHub page.
- This creates a copy of the repository under your own GitHub account.
- You can then clone your forked repository to your local machine for development.
- Forks are commonly used for contributing to open-source projects, as they allow you to propose changes via pull requests without considering you as a collaborator on the original repository.

**2. Keeping your fork up to date**
- It's important to keep your fork in sync with the original repository to avoid merge conflicts.
- You can do this by adding the original repository as a remote in your local clone:
  ```
  git remote add upstream https://github.com/original-owner/repository.git
  ```
- To fetch and merge changes from the original repository, use:
  ```
  git fetch upstream
  git checkout main
  git merge upstream/main
  ```
- This ensures your fork stays current with the latest changes from the original project.

**3. Merging changes from your fork**
- Once you've made changes in your forked repository and want to propose them to the original repository, you can create a pull request.
- First, push your changes to a branch in your forked repository.
- Then, navigate to the original repository on GitHub and click the "New pull request" button.
- Select the branch from your fork that contains the changes you want to merge.
- Provide a title and description for your pull request, explaining the changes you've made.
- Once submitted, the pull request can be reviewed by collaborators, who can leave comments, request changes, or approve the changes.
- After approval, the pull request can be merged into the main branch.

---

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
