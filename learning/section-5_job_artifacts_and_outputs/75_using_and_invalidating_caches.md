# Sections 5: Job Artifacts and Outputs

## Topic: Using and Invalidating Caches

## Date: 26/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Change some source files**
- After running the workflow once, modify some source files to trigger a new run.
- For example, change the text inside the `HelpBox` component in `HelpBox.jsx`.
- When the workflow runs again, observe that dependencies are restored from the cache, speeding up the installation process.
- The build step should complete faster due to cached dependencies.

**2. Change the dependency file**
- Modify the `package-lock.json` file or any other dependency file.
- This change will invalidate the cache, forcing a fresh installation of dependencies during the next workflow run.
- Observe that the cache is not used, and dependencies are reinstalled from scratch.
- The build step may take longer since it is not using cached dependencies.
---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
