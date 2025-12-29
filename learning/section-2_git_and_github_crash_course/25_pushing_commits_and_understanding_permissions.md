# Cornell Notes

## Topic: Creating a GitHub Account

## Date: 27/11/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Issue when pushing local branch to GitHub server**

- Using `git push origin main` results in an error:
  ```
    fatal: The current branch main has no upstream branch.
    To push the current branch and set the remote as upstream, use

        git push --set-upstream origin main
  ```
- This error occurs because the local branch `main` is not linked to any branch on the remote repository (GitHub server).
- Solution: 
  - Use the command `git push --set-upstream origin main` to link the local branch to the remote branch and push changes. 
  - Or just simply use `git push origin main`. If this branch `main` does not exist on the remote, it will be created.
- However, if the user does not have permission to push to the remote repository, they will encounter a permission error:
  ```
    ERROR: Permission to username/repository.git denied to other-username.
    fatal: unable to access 'https://github.com/username/repository.git/': The requested URL returned error: 403
  ```

**2. Set up remote connection**
- Using `git remote set-url origin https://github.com/username/repository.git` to set the remote URL for the repository.
- After that, using `git push origin main` to push changes to the remote repository.
- Then, in VS Code terminal, it prompts for GitHub username and password.
- For the password, we need to use a Personal Access Token (PAT) instead of the actual password for security reasons.

*Note: Visit https://git-scm.com/docs/gitcredentials for more information on (global) Git username + password / token management.*

---

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
