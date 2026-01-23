# Sections 5: Job Artifacts and Outputs

## Topic: Downloading Artifacts (Manually and Automatically)

## Date: 23/01/2025

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
uses: actions/upload-artifact@v4
with:
  name: dist-files
  path: |
    dist
    package.json
```
- `upload-artifact` action is the extension created by GitHub team that will take care of uploading the files to GitHub server and make it available for download
- The latest version is `v4`. If you try to use `v3`, it will get your job failed as `v3` is deprecated.

**3. Download the output**
- To download the artifacts, we can simply add a new step in our job
```yaml
uses: actions/download-artifact@v4
with:
  name: dist-files
```
- The name should be the same as the name used in the upload step.
- The latest version is `v4`. If you try to use `v3`, it will get your job failed as `v3` is deprecated.

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
