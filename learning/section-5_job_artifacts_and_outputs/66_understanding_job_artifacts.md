# Sections 5: Job Artifacts and Outputs

## Topic: Understanding Job Artifacts

## Date: 12/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Understanding Job Artifacts**
- **Job**
  - Might be build an app
  - Produce some **Output Asset(s)**, and these assets are commonly referred to as **Job Artifacts**
- After that, we can download and use manually via GitHub UI or **REST** API
- Or we can download and use in other **Jobs** via **Artifacts Action**

**2. Store the output**
- To store the artifacts, we can simply add a new step in our job
```yaml
uses: actions/upload-artifact@v3
with:
  name: dist-files
  path: |
    dist
    package.json
```

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
