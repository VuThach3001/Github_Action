# Cornell Notes

## Topic: Making changes as a different user (non-owner)

## Date: 29/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Making changes as a different user (non-owner)**
- To make changes to a repository as a different user (non-owner), you typically need to fork the repository first.
- Use the "Fork" button on the GitHub repository page to create a copy of the repository under your own account.
- After forking, clone your forked repository to your local machine:
  ```
  git clone https://github.com/your-username/repository.git
  ```
- Create a new branch for your changes:
  ```
  git checkout -b feature-branch
  ```
- Make your changes and commit them:
  ```
  git add .
  git commit -m "Description of changes"
  ```
- Push your changes to your forked repository:
  ```
  git push origin feature-branch
  ```
- For the first time pushing to the repository that does not belong to you, you will face the error:
   ```
    ERROR: Permission to username/repository.git denied to other-username.
    fatal: unable to access 'https://github.com/username/repository.git/': The requested URL returned error: 403
  ```

---

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
