# Sections 5: Job Artifacts and Outputs

## Topic: Module Summary

## Date: 26/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Artifacts**
- Jobs often product assets that should be shared or analyzed.
- Examples: Deployable website files, logs, binaries etc.
- These assets are referred to as "artifacts" (or "Job Artifacts").
- GitHub Actions provides Actions for uploading and downloading artifacts.

**2. Outputs**
- Beside Artifacts, Steps can produce and share simple values.
- These outputs are shared via `'{output-name}={output-value}' >> $GITHUB_OUTPUT`.
- Jobs can pick up and share Step outputs via the **steps** context.
- Other Jobs can use Job outputs via the **needs** context.

**3. Caching**
- Caching can help speed up repeated, slow steps.
- Typical use-case: Caching dependencies between runs.
- But any files and folder can be cached.
- The cache Action automatically stores and updates cache values (based on the cache key).
- **Important:** Don't use caching for artifacts.

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
