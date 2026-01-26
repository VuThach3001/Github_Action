# Sections 5: Job Artifacts and Outputs

## Topic: Caching dependencies in practice

## Date: 26/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Caching Step using `actions/cache`**
- Currently, GitHub Actions does not have built-in caching for dependencies, so we use the `actions/cache` action.
- The cache is identified using a unique key, which can include the operating system and a hash of the dependency file (e.g., `package-lock.json` for Node.js projects).
- If the cache is found, it restores the dependencies from the cache; otherwise, it proceeds to install them afresh.
```yml
- name: Cache dependencies
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: deps-node-modules-${{ hashFiles('**/package-lock.json') }}
```
- With the `~/.npm` path, we cache the npm packages installed on the machine.
- The key uses the hash of `package-lock.json` to ensure that if the dependencies change, a new cache will be created.
- If we put this caching step in every job, the actual run is only the first job that we run; subsequent jobs will hit the cache and skip the installation step.

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
